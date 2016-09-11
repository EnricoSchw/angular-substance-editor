'use strict';

var AbstractEditor = require('.substance/ui/AbstractEditor');
var ContainerEditor = require('substance/ui/ContainerEditor');
var SplitPane = require('substance/ui/SplitPane');
var ScrollPane = require('substance/ui/ScrollPane');
var RtsEditorOverlay = require('./RtsEditorOverlay');

function RtsEditor() {
    RtsEditor.super.apply(this, arguments);
}

RtsEditor.Prototype = function () {

    this.willUpdateState = function (newState) {
        this.handleStateUpdate(newState);
    };

    this.render = function ($$) {
        var el = $$('div').addClass('sc-prose-editor');

        var toolbar = this._renderToolbar($$);
        var editor = this._renderEditor($$);

        var contentPanel = $$(ScrollPane, {
            scrollbarType: 'substance',
            scrollbarPosition: 'right',
            overlay: RtsEditorOverlay,
        }).append(
            editor
        ).ref('contentPanel');

        el.append(
            $$(SplitPane, {splitType: 'horizontal'}).append(
                toolbar,
                contentPanel
            )
        );
        return el;
    };

    this._renderToolbar = function ($$) {
        var configurator = this.props.configurator;
        var ToolbarClass = configurator.getToolbarClass();
        var commandStates = this.commandManager.getCommandStates();
        return $$(ToolbarClass, {
            commandStates: commandStates
        }).ref('toolbar');
    };

    this._renderEditor = function ($$) {
        var configurator = this.props.configurator;
        return $$(ContainerEditor, {
            disabled: this.props.disabled,
            documentSession: this.documentSession,
            node: this.doc.get('body'),
            commands: configurator.getSurfaceCommandNames(),
            textTypes: configurator.getTextTypes()
        }).ref('body');
    };

    this.getToolbar = function () {
        return this.refs.toolbar;
    };

};

AbstractEditor.extend(RtsEditor);

module.exports = RtsEditor;
