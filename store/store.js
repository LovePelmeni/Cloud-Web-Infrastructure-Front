import * as vm from "../vm/vm.js"
import * as preparer from "../configuration_preparer/preparer.js"
import Vuex from "vuex";
import { useCookies } from "vue3-cookies";

export default new Vuex.Store({

  state: {
    customer: {
      "Username": "John Pandey",
      "Email": "some_email@gmail.com",
      "Password": "some_password",
      "Country": "Canada",
      "City": "Toronto",
      "Street": "National Street, 6",
      "ZipCode": "125189",
    },
    showCustomerProfile: false,
    virtualMachineSavedDraft: {
      // Hardware Configuration goes there...

      "AddedDatacenter": "",
      "AddedOperationalSystem": "", 
      "AddedPreInstalledTools": "", 

      // Resource Configuration goes there...
      "CpuNum": 100,
      "MaxCpu": 100,
      "Memory": 100,

      "MaxMemory": 1000,
      "StorageCapacity": 1000,
      "MaxStorageCapacity": 1000,
      
      "useRootCredentials": true,
      "useRootCertificate": false,
    },
    logout: false,
    loading: false,
    authenticated: true,
    virtualMachineData: [
      {
        "VirtualMachineId": "1567",
        "VirtualMachineName": "Virtual Machine",
        "Running": true, 
        "Deploying": false, 
        "Shutdown": false, 
        "paymentDueDate": "2020-20-02",         
        "CreatedAt": "1/2/2020",
        "Ssh": {
          "byRootCredentials": false,
          "byRootCertificate": true,
          "RootUsername": "root",
          "RootPassword": "root_password",
          "IpAddress": "127.235.11.28", // IP Address of the Virtual Machine Server 
        },
        "Owner": {
          "Username": "some-user",
          "Email": "email@gmail.com",
          "City": "Vancouver",
          "Country": "Canada",
          "Street": "Smith's Street, 4",
          "ZipCode": "125167",
        },
        "Capacities": { // Capacities, specified by the Customer 
          "MaxMemory": 1000,
          "MaxCpuNum": 1000,
          "MaxStorageCapacity": 1000,
        },
        "Resources": { // Used Resources by the Virtual Machine Server by now
          "CpuNum": 10,
          "Memory": 100,
          "StorageCapacity": 100,
        },
      },
      {
        "VirtualMachineId": "12578392923",
        "VirtualMachineName": "Server-Vm",
        "Running": false, 
        "Deploying": true, 
        "Shutdown": false, 
        "paymentDueDate": "2020-20-02",         
        "CreatedAt": "1/2/2019",

        "Owner": {
          "Username": "johnMa",
          "Email": "john@gmail.com",
          "City": "Toronto",
          "Country": "Canada",
          "Street": "Smith's Street, 4",
          "ZipCode": "125167",
        },
        "Ssh": {
          "byRootCredentials": true,
          "byRootCertificate": false,
          "IpAddress": "127.235.11.28",
          "RootUsername": "root",
          "RootPassword": "root_password",
        },
        "Capacities": { // Capacities, specified by the Customer 
          "MaxMemory": 1000,
          "MaxCpuNum": 1000,
          "MaxStorageCapacity": 1000,
        },
        "Resources": {
          "CpuNum": 100,
          "Memory": 1000,
          "StorageCapacity": 100,
        },
      },
      {
        "VirtualMachineId": "1256632234",
        "VirtualMachineName": "Virtual Machine",
        "Running": true, 
        "Deploying": false, 
        "Shutdown": false, 
        "paymentDueDate": "2020-20-02",         
        "CreatedAt": "1/2/2020",
        "Owner": {
          "Username": "some-user",
          "Email": "email@gmail.com",
          "Country": "Canada",
          "City": "Vancouver",
          "Street": "Smith's Street, 4",
          "ZipCode": "125167",
        },
        "Ssh": {
          "byRootCredentials": false,
          "byRootCertificate": true,
          "IpAddress": "127.235.11.28",
          "RootUsername": "root",
          "RootPassword": "root_password",
        },
        "Capacities": { // Capacities, specified by the Customer 
          "MaxMemory": 1000,
          "MaxCpuNum": 1000,
          "MaxStorageCapacity": 1000,
        },
        "Resources": {
          "CpuNum": 10,
          "Memory": 100,
          "StorageCapacity": 100,
        },
      },
      {
        "VirtualMachineId": "124356732412",
        "VirtualMachineName": "Virtual Machine Server",
        "Running": false, 
        "Deploying": true, 
        "Shutdown": false, 
        "paymentDueDate": "2020-20-02",
        "CreatedAt": "1/2/2021",
        
        "Ssh": {
          "byRootCredentials": true,
          "byRootCertificate": false,
          "IpAddress": "127.235.11.28",
          "RootUsername": "root",
          "RootPassword": "root_password",
        },

        "Owner": {
          "Username": "some-user",
          "Email": "email@gmail.com",
          "Country": "Canada",
          "City": "Toronto",
          "Street": "Smith's Street, 4",
          "ZipCode": "125167",
        },

        "Capacities": { // Capacities, specified by the Customer 
          "MaxMemory": 1000,
          "MaxCpuNum": 1000,
          "MaxStorageCapacity": 1000,
        },

        "Resources": {
          "CpuNum": 5,
          "Memory": 100,
          "StorageCapacity": 100,
        },

      },
      {
        "VirtualMachineId": "12566323255231",
        "VirtualMachineName": "Virtual Machine",
        "Running": true, 
        "Deploying": false, 
        "Shutdown": false, 
        "paymentDueDate": "2020-20-02",         
        "CreatedAt": "1/2/2020",
        "Owner": {
          "Username": "some-user",
          "Email": "email@gmail.com",
          "Country": "Canada",
          "City": "Vancouver",
          "Street": "Smith's Street, 4",
          "ZipCode": "125167",
        },
        "Ssh": {
          "byRootCredentials": false,
          "byRootCertificate": true,
          "IpAddress": "127.235.11.28",
          "RootUsername": "root",
          "RootPassword": "root_password",
        },
        "Capacities": { // Capacities, specified by the Customer 
          "MaxMemory": 1000,
          "MaxCpuNum": 1000,
          "MaxStorageCapacity": 1000,
        },
        "Resources": {
          "CpuNum": 10,
          "Memory": 100,
          "StorageCapacity": 100,
        },
      },
      {
        "VirtualMachineId": "124356723523121",
        "VirtualMachineName": "Virtual Server v1",
        "Running": false, 
        "Deploying": false, 
        "Shutdown": false, 
        "paymentDueDate": "2020-20-02",
        "CreatedAt": "1/2/2021",
        
        "Ssh": {
          "byRootCredentials": true,
          "byRootCertificate": false,
          "IpAddress": "127.235.11.28",
          "RootUsername": "root",
          "RootPassword": "root_password",
        },

        "Owner": {
          "Username": "some-user",
          "Email": "email@gmail.com",
          "Country": "Canada",
          "City": "Toronto",
          "Street": "Smith's Street, 4",
          "ZipCode": "125167",
        },

        "Capacities": { // Capacities, specified by the Customer 
          "MaxMemory": 1000,
          "MaxCpuNum": 1000,
          "MaxStorageCapacity": 1000,
        },

        "Resources": {
          "CpuNum": 5,
          "Memory": 100,
          "StorageCapacity": 100,
        },

      },
      {
        "VirtualMachineId": "124423223512346",
        "VirtualMachineName": "Third Server",
        "Running": false, 
        "Deploying": false, 
        "Shutdown": true, 
        "paymentDueDate": "2020-20-02",
        "CreatedAt": "10/5/2021",

        "Ssh": {
          "byRootCredentials": true,
          "byRootCertificate": false,
          "IpAddress": "127.235.11.28",
          "RootUsername": null, // Root Username for the Virtual Server 
          "RootPassword": null, // Root Password for the Virtual Server 
        },

        "Owner": {
          "Username": "some-user",
          "Email": "email@gmail.com",
          "Country": "Canada",
          "City": "Toronto",
          "Street": "Smith's Street, 4",
          "ZipCode": "125167",
        },

        "Capacities": { // Capacities, specified by the Customer 
          "MaxMemory": 1000,
          "MaxCpuNum": 1000,
          "MaxStorageCapacity": 1000,
        },

        "Resources": {
          "CpuNum": 5,
          "Memory": 10,
          "StorageCapacity": 1000,
        },
      }
    ],
    initializationModal: null,
    modalActive: false,
    virtualMachinesLoaded: true,
    currentVirtualMachineArray: null,
    updateVirtualMachine: null,
    activeError: false,
    activeNotification: false,
    notifications: [],
    error: null,
  },

  mutations: {

    // Handles Customer's Statuses

    TOGGLE_SHOW_CUSTOMER_PROFILE(state) {
      // Triggers event to show the Customer's Profile
      state.showCustomerProfile = true
    },

    TOGGLE_HIDE_CUSTOMER_PROFILE(state) {
      // Triggers event to hide the Customer's Profile
      state.showCustomerProfile = false
    },

    GET_AUTHENTICATION_STATUS() {
      // Returns the Registered Status for the Customer 
      let CookiesModule = useCookies() 
      let Token = CookiesModule.cookies.get("jwt-token") 
      if (Token == null || String(Token).length == 0) {
        return false
      }else{return true}
    },

    TOGGLE_NOT_AUTHENTICATED(state) {
      // Changes status of the Customer to not Authenticated 
      state.authenticated = !state.authenticated
    },

    // Toggle Methods
    TOGGLE_INITIALIZATION_MODAL(state) {
      // Toggling Initialization Modal Window
      state.initializationModal = !state.initializationModal;
    },

    TOGGLE_LOGOUT_MODAL(state) {
      // Changing state to the logged out, in order to trigger approval logout window
      state.logout = true;
    },

    TOGGLE_HIDE_LOGOUT_MODAL(state) {
      state.logout = false
    },

    TOGGLE_MODAL(state) {
      // Toggling Modal Window
      state.modalActive = !state.modalActive;
    },

    TOGGLE_NOTIFICATION(state, notification) {
      // Toggling Notification Modal Window
      state.activeNotification = !state.activeNotification
      state.notifications.push({'message': notification.message, 'date': new Date().now()})
      new Promise(r => setTimeout(r, 5));
      // Hiding Notification Back
      this.commit('TOGGLE_HIDE_NOTIFICATION', state, notification)
    },

    TOGGLE_HIDE_NOTIFICATION(state, notification) {
      // Hides the Notification
      state.activeNotification = false
      state.notifications = state.notifications.filter((notificationObj) => {
        return notificationObj.message !== notification
      })
    },
    
    TOGGLE_UPDATE_VIRTUAL_MACHINE(state) {
      // Toggling Update Virtual Machine Window
      state.updateVirtualMachine = !state.updateVirtualMachine;
    },

    TOGGLE_HIDE_ERROR(state){
      // Toggling Error to Hide
      state.activeError = false
    },

    TOGGLE_ERROR(state, newError) {
      // Toggling Error to show up

      // Showing up the error

      state.error = newError
      state.activeError = !state.activeError
      new Promise(r => setTimeout(r, 5));
      this.commit("TOGGLE_HIDE_ERROR", state, newError)
    },

    // Store's State Management Methods


    SET_CURRENT_VIRTUAL_MACHINE(state, virtualMachineId) {
      state.currentVirtualMachineArray = state.virtualMachineData.filter((virtualMachine) => {
        return virtualMachine.VirtualMachineId === virtualMachineId;
      });
    },

    INSERT_NEW_VIRTUAL_MACHINE(list, virtualMachine) {
      // Inserts new Virtual Machine Objecg  Inside the List
      list.push({
                    // General Information about the Customer's Virtual Machine

                    virtualMachineId: virtualMachine.VirtualMachineid,
                    virtualMachineName: virtualMachine.VirtualMachineName,
                    clientEmail: virtualMachine.OwnerEmail,

                    // SSH Credentials for the Virtual Machine
                    RootUsername: virtualMachine.Ssh.RootUsername,
                    RootPassword: virtualMachine.Ssh.RootPassword,
                    Secure: virtualMachine.Ssh.Secure,
                    RootCertificate: virtualMachine.RootCertificate,

                    // Creation Date Info
                    virtualMachineDateUnix: virtualMachine.CreatedAt.Unix(),
                    virtualMachineDate: virtualMachine.CreatedAt,

                    // Pay Terms + Setting up Current Date for the Payment
                    paymentTerms: virtualMachine.PaymentTerms,
                    paymentDueDateUnix: virtualMachine.paymentCreatedAt.Unix(),
                    paymentDueDate: virtualMachine.paymentCreatedAt,

                    // Information about the Customer Billing Account and where the Payments Is Going to be Addressed
                    billerStreetAddress: virtualMachine.billerStreetAddress,
                    billerStreetCity: virtualMachine.billerCity,
                    billerZipCode: virtualMachine.billerZipCode,
                    billerCountry: virtualMachine.billerCountry,

                    // Description
                    virtualMachineItemList: virtualMachine.VirtualMachineItemList,
                    TotalCost: virtualMachine.TotalCost,

                    Running: virtualMachine.Running,
                    Shutdown: virtualMachine.Shutdown,
                    Deploying: virtualMachine.Deploying,
      })
    },

    UPDATE_INSERT_VIRTUAL_MACHINE(list, virtualMachineId, UpdatedVirtualMachineData) {

      let oldVirtualMachine = list.filter((virtualMachine) => {
        return virtualMachine.VirtualMachineId === virtualMachineId;
      });

      if (oldVirtualMachine != null){
                    // General Information about the Customer's Virtual Machine

                    oldVirtualMachine.virtualMachineId =  UpdatedVirtualMachineData.VirtualMachineid,
                    oldVirtualMachine.virtualMachineName =  UpdatedVirtualMachineData.VirtualMachineName,
                    oldVirtualMachine.clientEmail = UpdatedVirtualMachineData.OwnerEmail,

                    // SSH Credentials for the Virtual Machine
                    oldVirtualMachine.RootUsername = UpdatedVirtualMachineData.Ssh.RootUsername
                    oldVirtualMachine.RootPassword = UpdatedVirtualMachineData.Ssh.RootPassword
                    oldVirtualMachine.Secure = UpdatedVirtualMachineData.Ssh.Secure
                    oldVirtualMachine.RootCertificate = UpdatedVirtualMachineData.RootCertificate

                    // Creation Date Info
                    oldVirtualMachine.virtualMachineDateUnix = UpdatedVirtualMachineData.CreatedAt.Unix()
                    oldVirtualMachine.virtualMachineDate = UpdatedVirtualMachineData.CreatedAt

                    // Pay Terms + Setting up Current Date for the Payment
                    oldVirtualMachine.paymentTerms = UpdatedVirtualMachineData.PaymentTerms
                    oldVirtualMachine.paymentDueDateUnix =  UpdatedVirtualMachineData.paymentCreatedAt.Unix()
                    oldVirtualMachine.paymentDueDate = UpdatedVirtualMachineData.paymentCreatedAt

                    // Information about the Customer Billing Account and where the Payments Is Going to be Addressed
                    oldVirtualMachine.billerStreetAddress = UpdatedVirtualMachineData.billerStreetAddress
                    oldVirtualMachine.billerStreetCity = UpdatedVirtualMachineData.billerCity
                    oldVirtualMachine.billerZipCode = UpdatedVirtualMachineData.billerZipCode
                    oldVirtualMachine.billerCountry = UpdatedVirtualMachineData.billerCountry

                    // Description
                    oldVirtualMachine.virtualMachineItemList = UpdatedVirtualMachineData.VirtualMachineItemList
                    oldVirtualMachine.TotalCost = UpdatedVirtualMachineData.TotalCost

                    oldVirtualMachine.Running = UpdatedVirtualMachineData.Running
                    oldVirtualMachine.Shutdown = UpdatedVirtualMachineData.Shutdown
                    oldVirtualMachine.Deploying = UpdatedVirtualMachineData.Deploying
    }},


    SAVE_VIRTUAL_MACHINE_CONFIGURATION_DRAFT(state, customizedConfiguration, hardwareConfiguration) {
      // Saves the Configuration Object 
      state.virtualMachineSavedDraft = {
        // Hardware Configuration goes there...

        "AddedDatacenter": hardwareConfiguration["Datacenter"],
        "AddedOperationalSystem": hardwareConfiguration["OperationalSystem"], 
        "AddedPreInstalledTools": hardwareConfiguration["PreInstalledTools"], 

        // Resource Configuration goes there...
        "CpuNum": customizedConfiguration["CpuNum"],
        "MaxCpu": customizedConfiguration["MaxCpu"],
        "Memory": customizedConfiguration["Memory"],

        "MaxMemory": customizedConfiguration["MaxMemory"],
        "StorageCapacity": customizedConfiguration["StorageCapacity"],
        "MaxStorageCapacity": customizedConfiguration["MaxStorageCapacity"],

        "useRootCredentials": customizedConfiguration["useRootCredentials"],
        "useRootCertificate": customizedConfiguration["useRootCertificate"],
      }
    },


    // Virtual Machine Status Methods

    UPDATE_STATUS_TO_RUNNING(state, payload) {
      // Updates Visualized Status to Running
      for (let virtualMachine in state.virtualMachineData){
          if (virtualMachine.VirtualMachineId === payload) {
            virtualMachine.Running = true;
            virtualMachine.Shutdown = false;
            virtualMachine.Deploying = false;
          }
      }
    },

    UPDATE_STATUS_TO_SHUTDOWN(state, payload) {
      // Updates Visualized Status to Shutdown
      for (let virtualMachine in state.virtualMachineData){
          if (virtualMachine.VirtualMachineId === payload) {
            virtualMachine.Deploying = false;
            virtualMachine.Running = false;
            virtualMachine.Shutdown = true;
          }
      }
    },

    UPDATE_STATUS_TO_DEPLOYING(state, payload) {
      // Updates Visualized Status to Deploying
      for (let virtualMachine in state.virtualMachineData){
        if (virtualMachine.VirtualMachineId === payload) {
          virtualMachine.Running = false;
          virtualMachine.Deploying = true;
          virtualMachine.Shutdown = false;
        }
      }
    },

    VIRTUAL_MACHINES_LOADED(state) {
      // Turns that the Virtual Machine Servers Objects has been Successfully Obtained 
      state.virtualMachinesLoaded = true
    },
  },  

  // Action Methods
  actions: {

    GET_VIRTUAL_MACHINE(JwtToken, VirtualMachineId) {
      // Returns A Virtual Machine Server Object Info
      let virtualMachineManager = new vm.VirtualMachineManager()
      let virtualMachine, virtualMachineError = virtualMachineManager.GetCustomerVirtualMachine(JwtToken, VirtualMachineId)
      return virtualMachine, virtualMachineError
    },

    GET_VIRTUAL_MACHINES({commit, state}, JwtToken) {
      // Returns List of the Virtual Machine Servers, belongs To Customer

      let VirtualMachineManager = new vm.VirtualMachineManager()
      let results, ResultError = VirtualMachineManager.GetCustomerVirtualMachines(JwtToken)
      if (ResultError != null) {commit("TOGGLE_ERROR", state, ResultError)}

      for (let virtualMachine in results){
        if (!state.VirtualMachineData.some((virtualMachine) => virtualMachine.VirtualMachineId === virtualMachine.VirtualMachineId)) {
          const newVirtualMachine = {

            // General Information about the Customer's Virtual Machine

            virtualMachineId: virtualMachine.VirtualMachineid,
            virtualMachineName: virtualMachine.VirtualMachineName,
            clientEmail: virtualMachine.OwnerEmail,

            // SSH Credentials for the Virtual Machine
            RootUsername: virtualMachine.Ssh.RootUsername,
            RootPassword: virtualMachine.Ssh.RootPassword,
            Secure: virtualMachine.Ssh.Secure,
            RootCertificate: virtualMachine.RootCertificate,

            // Creation Date Info
            virtualMachineDateUnix: virtualMachine.CreatedAt.Unix(),
            virtualMachineDate: virtualMachine.CreatedAt,

            // Pay Terms + Setting up Current Date for the Payment
            paymentTerms: virtualMachine.PaymentTerms,
            paymentDueDateUnix: virtualMachine.paymentCreatedAt.Unix(),
            paymentDueDate: virtualMachine.paymentCreatedAt,

            // Information about the Customer Billing Account and where the Payments Is Going to be Addressed
            billerStreetAddress: virtualMachine.billerStreetAddress,
            billerStreetCity: virtualMachine.billerCity,
            billerZipCode: virtualMachine.billerZipCode,
            billerCountry: virtualMachine.billerCountry,

            // Description
            virtualMachineItemList: virtualMachine.VirtualMachineItemList,
            TotalCost: virtualMachine.TotalCost,

            Running: virtualMachine.Running,
            Shutdown: virtualMachine.Shutdown,
            Deploying: virtualMachine.Deploying,
          };
          commit('INSERT_NEW_VIRTUAL_MACHINE', state.virtualMachineData, newVirtualMachine);
        }
      }
      commit('VIRTUAL_MACHINES_LOADED', state)
    },

    CREATE_VIRTUAL_MACHINE({commit, state}, JwtToken, customizedConfiguration, hardwareConfiguration) {

      // Creates New Virtual Machine Server
      // Initializing New Virtual Machine Manager

      let vmManager = new vm.VirtualMachineManager()

      // Initializing Hardware Configuration
      let HardwareConfiguration = new preparer.HardwareConfiguration(
        hardwareConfiguration["Datacenter"],
        hardwareConfiguration["OperationalSystem"],
        hardwareConfiguration["Tools"],
      )

      // Initializing Customized Configuration with the Resources, Custom OS, Preinstalled Tools etc...
      let CustomizedConfiguration = new preparer.CustomConfiguration(
          customizedConfiguration["Metadata"], customizedConfiguration["Resource"],
          customizedConfiguration["HostSystem"], customizedConfiguration["Ssl"], customizedConfiguration["Tools"]
      )

      // Initializing Empty Virtual Machine Server Instance
      let initialized, initializationError = vmManager.InitializeVirtualMachine(JwtToken, HardwareConfiguration)
        if (initialized && initializationError == null) {
          // Applying Customized Configuration

          let appliedInfo, applyError = vmManager.ApplyVirtualMachineConfiguration(JwtToken, CustomizedConfiguration, initialized["VirtualMachineId"])
          if (applyError != null && appliedInfo != null) {

            let virtualMachine = vmManager.GetVirtualMachine(JwtToken, appliedInfo["VirtualMachineId"])
            virtualMachine["Running"] = true
            virtualMachine["Shutdown"] = false
            virtualMachine["Deploying"] = false

            commit('INSERT_NEW_VIRTUAL_MACHINE', state.VirtualMachineData, virtualMachine)
            return appliedInfo, applyError
          }else{
            commit('TOGGLE_ERROR', "Failed to Apply Configuration")
            return;
          }
        }else{
          commit('TOGGLE_ERROR', "Failed to Initialize Virtual Machine")
          return;
        }
    },

    DELETE_VIRTUAL_MACHINE({state}, JwtToken, VirtualMachineId) {
      // Deletes Virtual Machine Server
      let vmManager = new vm.VirtualMachineManager()
      let deleted, deletionError = vmManager.DestroyVirtualMachine(JwtToken, VirtualMachineId)
      if (deleted && deletionError == null) {
        state.VirtualMachineData = state.VirtualMachineData.filter(
        (virtualMachine) => virtualMachine.VirtualMachineId !== VirtualMachineId);
        return deleted, deletionError
      }else {
        return deleted, deletionError
      }
    },

    UPDATE_VIRTUAL_MACHINE({commit, state}, hardwareConfiguration, customizedConfiguration, JwtToken, VirtualMachineId) {
      // Updates Virtual Machine Server

      let vmManager = new vm.VirtualMachineManager()

      // Initializing Hardware Configuration
      let HardwareConfiguration = new preparer.HardwareConfiguration(
          hardwareConfiguration["Datacenter"],
          hardwareConfiguration["OperationalSystem"],
          hardwareConfiguration["Tools"],
      )
      
      // Initializing Customized Configuration with the Resources, Custom OS, Preinstalled Tools etc...
      let CustomizedConfiguration = new preparer.CustomConfiguration(
          customizedConfiguration["Metadata"], customizedConfiguration["Resource"],
          customizedConfiguration["HostSystem"], customizedConfiguration["Ssl"], customizedConfiguration["Tools"]
      )

      let updatedInfo, updateError = vmManager.UpdateVirtualMachine(JwtToken, VirtualMachineId, HardwareConfiguration, CustomizedConfiguration)
      if (updateError == null) {

        let virtualMachine = vmManager.GetVirtualMachine(JwtToken, updatedInfo["VirtualMachineId"])
        commit('INSERT_NEW_VIRTUAL_MACHINE', state.virtualMachineData, virtualMachine)
        return true, updateError
      }else{
        return false, updateError
      }
    },

    SHUTDOWN_VIRTUAL_MACHINE(JwtToken, virtualMachineId) {
      // Shuts down the Virtual Machine  Server

      let vmManager = new vm.VirtualMachineManager()
      let Shutdown, ShutdownError = vmManager.ShutdownVirtualMachine(JwtToken, virtualMachineId)
      return Shutdown, ShutdownError
    },

    START_VIRTUAL_MACHINE(JwtToken, VirtualMachineId) {
      // Starting up the Virtual Machine

      let vmManager = new vm.VirtualMachineManager()
      let Started, StartError = vmManager.StartVirtualMachine(JwtToken, VirtualMachineId)
      return Started, StartError
    },

    REBOOT_VIRTUAL_MACHINE(JwtToken, VirtualMachineId) {
      // Reboots Virtual Machine

      let vmManager = new vm.VirtualMachineManager()
      let Rebooted, RebootError = vmManager.RebootVirtualMachine(JwtToken, VirtualMachineId)
      return Rebooted, RebootError
    },
  },
  modules: {},
});
