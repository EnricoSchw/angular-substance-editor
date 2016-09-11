'use strict';

var DefaultOverlay = require('substance/ui/DefaultOverlay');

function RtsEditorOverlay() {
    RtsEditorOverlay.super.apply(this, arguments);
}

RtsEditorOverlay.Prototype = function () {

    this.getClassNames = function () {
        return 'sc-prose-editor-overlay';
    };

};

DefaultOverlay.extend(RtsEditorOverlay);

module.exports = RtsEditorOverlay;
