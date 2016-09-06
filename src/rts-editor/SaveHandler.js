'use strict';

var oo = require('substance/util/oo');

var SaveHandler = function () {
};

SaveHandler.Prototype = function () {
    this.saveDocument = function (doc, changes, cb) {
        console.warn('It is may Save Handler!');
        cb(null);
    };
};

oo.initClass(SaveHandler);

module.exports = SaveHandler;
