'use strict';

var Document = require('substance/model/Document');

function RtsArticle(schema) {
    Document.call(this, schema);
    this._initialize();
}

RtsArticle.Prototype = function () {

    this._initialize = function () {
        this.create({
            type: 'container',
            id: 'body',
            nodes: []
        });
    };

};

Document.extend(RtsArticle);

module.exports = RtsArticle;
