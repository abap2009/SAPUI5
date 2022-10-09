/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "modellocal/modellocal/model/models",
    "sap/ui/model/resource/ResourceModel"
],
    function (UIComponent, Device, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("modellocal.modellocal.Component", {
            metadata: {
            //     "rootView": {
            //         "viewName": "modellocal.modellocal.view.App",
            //         "type": "XML",
            //         "async": true,
            //         "id": "app"
            //     }
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             * @param {typeof sap.ui.model.resource} ResourceModel
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                //set data model on the view
                this.setModel(models.createRecipient());

                //set i18n on the view
                var i18nModel = new ResourceModel({
                    bundleName: "modellocal.modellocal.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n");

                // enable routing
                this.getRouter().initialize();

                // set the device model
                //    this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);