/*global QUnit*/

sap.ui.define([
	"project_1/controller/class_1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("class_1 Controller");

	QUnit.test("I should test the class_1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
