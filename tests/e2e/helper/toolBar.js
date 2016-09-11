'use strict';

function ToolBar() {

}

ToolBar.prototype.getToolbar = function () {
    return element(by.className('sc-tool-group'));
};

ToolBar.prototype.getSaveButton = function () {
    return this.getToolbar().element(by.css('div[aria-label="Save"]')).element(by.tagName('button'));
};



module.exports = ToolBar;
