'use strict';
import {
    ProseEditorPackage,
    ImagePackage,
    PersistencePackage,
    Configurator,
    ProseEditor,
    DocumentSession
} from "substance";


/*
 Application config
 */
let config = {
    name: 'angular-substance',
    configure: function (config) {
        config.import(ProseEditorPackage);
        config.import(ImagePackage);
        config.import(PersistencePackage);
    }
};


class Editor {

    constructor(substanceService) {
        this.substanceService = substanceService;
    }

    render() {
        let configurator = new Configurator().import(config);

        var article = configurator.createArticle(this.substanceService.loadDocument);

        let documentSession = new DocumentSession(article, {'saveHandler': this.substanceService});
        ProseEditor.mount({
            documentSession: documentSession,
            configurator: configurator
        }, 'substanceEditor')
    }
}


export default Editor;



