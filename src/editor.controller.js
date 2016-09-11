'use strict';

var Configurator = require('./rts-editor/RtsEditorConfigurator');
var Component = require('substance/ui/Component');
var ProseEditor = require('substance/packages/prose-editor/ProseEditor');
var DocumentSession = require('substance/model/DocumentSession');

function App() {
    App.super.apply(this, arguments);
}

App.Prototype = function () {
    this.render = function ($$) {
        var el = $$('div').addClass('app');
        el.append($$(ProseEditor, {
            documentSession: this.props.documentSession,
            configurator: this.props.configurator
        }));
        return el;
    };
};

Component.extend(App);

module.exports = function (substanceService, config) {
    var configurator = new Configurator(config);
    var document = substanceService.loadDocument;
    
    configurator.setSaveHandler(substanceService);
    return {
        render: function () {
            // Creates a ProseArticle based on the ProseEditorConfig
            var doc = configurator.createArticle(document);
            var documentSession = new DocumentSession(doc);
            Component.mount(App, {
                documentSession: documentSession,
                configurator: configurator
            }, 'substanceEditor');
        }
    };
};
