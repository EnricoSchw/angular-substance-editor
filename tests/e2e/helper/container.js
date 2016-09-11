'use strict';

function Container() {

}

Container.prototype.getParagraphElement = function (number) {
    return element(by.css('div[data-id="p'+number+'"]'));
};

Container.prototype.getContentOfParagraphElement = function (number) {
    return element(by.css('span[data-path="p'+number+'.content"]'));
};

module.exports = Container;
