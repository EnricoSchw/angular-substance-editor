'use strict';

// Base packages
var BasePackage = require('substance/packages/base/BasePackage');
var ParagraphPackage = require('substance/packages/paragraph/ParagraphPackage');
var HeadingPackage = require('substance/packages/heading/HeadingPackage');
var CodeblockPackage = require('substance/packages/codeblock/CodeblockPackage');
var BlockquotePackage = require('substance/packages/blockquote/BlockquotePackage');
var ListPackage = require('substance/packages/list/ListPackage');
var LinkPackage = require('substance/packages/link/LinkPackage');
var EmphasisPackage = require('substance/packages/emphasis/EmphasisPackage');
var StrongPackage = require('substance/packages/strong/StrongPackage');
var CodePackage = require('substance/packages/code/CodePackage');
var SubscriptPackage = require('substance/packages/subscript/SubscriptPackage');
var SuperscriptPackage = require('substance/packages/superscript/SuperscriptPackage');
var RtsEditorToolbar = require('./RtsEditorToolbar');
var Overlay = require('substance/ui/Overlay');

// Article Class
var RtsArticle = require('./RtsArticle');

module.exports = {
    name: 'prose-editor',
    configure: function (config) {
        config.defineSchema({
            name: 'prose-article',
            ArticleClass: RtsArticle,
            defaultTextType: 'paragraph'
        });

        config.setToolbarClass(RtsEditorToolbar);
        config.addComponent('overlay', Overlay);

        // Now import base packages
        config.import(BasePackage);
        config.import(ParagraphPackage);
        config.import(HeadingPackage);
        config.import(CodeblockPackage);
        config.import(BlockquotePackage);
        config.import(ListPackage);
        config.import(EmphasisPackage);
        config.import(StrongPackage);
        config.import(SubscriptPackage);
        config.import(SuperscriptPackage);
        config.import(CodePackage);
        config.import(LinkPackage);
    }
};
