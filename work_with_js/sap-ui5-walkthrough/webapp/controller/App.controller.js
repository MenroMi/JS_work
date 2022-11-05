sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],

 (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

        onInit: function() {

            let oData = {
                user: {
                    name: "John",
                    age: 38
                }
            }

            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

        },

        onShowHello: function() {
            MessageToast.show("Hello World!");    
        }
    });

})