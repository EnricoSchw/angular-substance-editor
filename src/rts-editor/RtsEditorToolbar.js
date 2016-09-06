'use strict';

var Toolbar = require('substance/ui/Toolbar');

function RtsEditorToolbar() {
    RtsEditorToolbar.super.apply(this, arguments);
}

RtsEditorToolbar.Prototype = function () {

    this.getClassNames = function () {
        return 'sc-prose-editor-toolbar';
    };

};

Toolbar.extend(RtsEditorToolbar);

module.exports = RtsEditorToolbar;
