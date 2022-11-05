
sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], (XMLView) => {
    "use strict";

    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
    }).then((oView) => oView.placeAt("content"));

    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.controller.App"
    }).then((oController) => oController.placeAt("content"));


});