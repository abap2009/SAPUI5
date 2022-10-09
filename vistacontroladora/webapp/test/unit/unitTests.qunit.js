/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"vistacontroladora/vistacontroladora/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
