'use strict';
var Configurator = require('../../util/Configurator');
var SaveHandler = require('./SaveHandler');

/*
 This works well for single-column apps (such as ProseEditor).
 Write your own Configurator for apps that require more complex
 configuration (e.g. when there are multiple surfaces involved
 each coming with different textTypes, enabled commands etc.)
 */
function RtsEditorConfigurator() {
    RtsEditorConfigurator.super.apply(this, arguments);

    // Extend configuration
    this.config.saveHandler = new SaveHandler();

}

RtsEditorConfigurator.Prototype = function () {

    this.setSaveHandler = function (saveHandler) {
        this.config.saveHandler = saveHandler;
    };

    this.getSaveHandler = function () {
        return this.config.saveHandler;
    };
};

Configurator.extend(RtsEditorConfigurator);

module.exports = RtsEditorConfigurator;
