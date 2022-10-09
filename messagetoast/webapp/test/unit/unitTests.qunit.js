/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"messagetoast/messagetoast/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
