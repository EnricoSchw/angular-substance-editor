'use strict';

function ToolBar() {

}

ToolBar.prototype.getToolbar = function () {
    return element(by.className('sc-toolbar'));
};

ToolBar.prototype.getToolGroupDocument = function () {
    return element(by.className('sc-tool-group sm-target-document'));
};

ToolBar.prototype.getSaveButton = function () {

    return this.getToolGroupDocument().element(by.css('div[aria-label="Save"]')).element(by.tagName('button'));
};


module.exports = ToolBar;
