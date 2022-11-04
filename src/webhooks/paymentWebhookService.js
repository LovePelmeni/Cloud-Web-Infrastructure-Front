const express = require("express")
const applicationService = express() 

let Logger = require("pino")()
let crossOriginResourceSharingLib = require("cors")

let ApplicationWebhookServicePort = process.env.APPLICATION_WEBHOOK_SERVICE_PORT
let webhookStripeSecret = process.env.WEBHOOK_STRIPE_SECRET

import * as stripe from "stripe";


class CheckoutUploaderManager {
    // Class, responsible for saving the Checkout Documents to the Database 

    constructor(PaymentDocument) {
        this.PaymentIntentDocument = PaymentDocument
    }
    OperationTimeout() {
        return new Promise(() => {}, 1000)
    }
    async UploadCheckout() {
        // Uploading the Checkout Document to the Backend Server's Database 
        let APIUrl = new URL(`http://${process.env.BACKEND_APPLICATION_HOST}:${process.env.BACKEND_APPLICATION_HOST}/upload/payment/checkout/`)
        let HttpResponse = $.ajax({
            url: APIUrl.toString(),
            data: JSON.stringify({"CheckoutDocument": this.PaymentIntentDocument}),
            type: "POST",
            async: false, 
            success: function(httpResponse) {
                return httpResponse.statusCode
            },
            error: function(httpError) {
                return httpError
            }
        })
        if (HttpResponse) {}
        return this.OperationTimeout()
    }
}

class PaymentWebhookManager {
    // Class, responsible for handling payment webhooks

    ProcessWebhookPaymentState(paymentEvent) {
        // Identifying the Payment Operation State 
        switch (paymentEvent.type){
            case "payment_intent.succeeded":
                Logger.debug("Payment Intent has been proceed successfully, Information: " + 
                JSON.stringify(paymentEvent.state.object))
                let PaymentIntentInformation = paymentEvent.state.object
                return PaymentIntentInformation

            case "payment_intent.attached": 
                Logger.info("Payment Intent has been attached to the Customer")
                return null 
            default:
                Logger.error("payment unhandled event type: " + paymentEvent.type)
                return null
        }
    }
}

applicationService.post("/payment/webhook/", express.raw({type: "application/json"}),
 function(request, response) {
    let approvementSignatureHeader = request.headers["stripe-signature"]
    try {
        let event = stripe.webhooks.constructEvent(
            request.body, 
            approvementSignatureHeader,
            webhookStripeSecret
        )
        if (event != null) {
            let WebhookManager = new PaymentWebhookManager() 
            WebhookManager.ProcessWebhookPaymentState(event)
        }
        response.setHeader("Cache-Control", "max_age=3600")
        response.status(201).send(`Payment has been Proceeded Successfully`)
    } catch(error) {
        Logger.Info("Attempted to Fake the Webhook Payment Event")
        response.status(400).send(JSON.stringify({"Error": "Invalid Event: " + error}))
    }
})
// Initializing CORS Policy for the webhooks 

applicationService.use(
    crossOriginResourceSharingLib(
    {
        origin: `http://${process.env.BACKEND_APPLICATION_HOST}:${process.env.BACKEND_APPLICATION_PORT}`, 
        methods: "POST,PUT,DELETE,OPTIONS", 
        exposedHeaders: "Keep-Alive,Connection,"
    }
))

applicationService.listen(Number(ApplicationWebhookServicePort), function() {
    Logger.debug("Webhook Service has been Successfully Started")
    console.log("Webhook Service has been Successfully Started")
})