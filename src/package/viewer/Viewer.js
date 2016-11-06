'use strict';

import {ProseEditorPackage, Configurator, DocumentSession} from "substance";
import DocumentViewer from "./DocumentViewer";

/*
 Application config
 */
let config = {
    name: 'angular-substance',
    configure: function (config) {
        config.import(ProseEditorPackage);
    }
};

class Viewer {

    constructor(substanceService) {
        this.substanceService = substanceService;
    }

    render() {
        let configurator = new Configurator().import(config);

        var article = configurator.createArticle(this.substanceService.loadDocument);

        let documentSession = new DocumentSession(article);
        DocumentViewer.mount({
            documentSession: documentSession,
            configurator: configurator
        }, 'substanceEditor')
    }
}


export default Viewer;
