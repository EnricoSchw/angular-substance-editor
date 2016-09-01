'use strict';
var ProseEditorPackage = require('substance/packages/prose-editor/ProseEditorPackage');
var ImagePackage = require('substance/packages/image/ImagePackage');
var PersistencePackage = require('substance/packages/persistence/PersistencePackage');

module.exports = {
    name: 'image-example',
    configure: function (config) {
        config.import(ProseEditorPackage);
        config.import(ImagePackage);
        config.import(PersistencePackage);
    }
};
