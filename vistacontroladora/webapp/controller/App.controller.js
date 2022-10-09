
  sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], 
 /**
  * 
  * @param {typeof sap.ui.core.mvc.Controller} Controller
  */
 
function(Controller) {
     "use strict";
     
     return Controller.extend("vistacontroladora.vistacontroladora.controller.App", {
    onShowHello: function () {
        alert("Perfect my friend...");
    }
     
     });

 });