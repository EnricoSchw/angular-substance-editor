'use strict';

import ToolbarViewer from "./ToolbarViewer";
import {ProseEditor, ContainerEditor, ProseEditorOverlayTools} from "substance";


class DocumentViewer extends ProseEditor {

    render($$) {
        let SplitPane = this.componentRegistry.get('split-pane')
        let el = $$('div').addClass('sc-prose-editor')
        let toolbar = this._renderToolbar($$)
        let editor = this._renderEditor($$)

        let ScrollPane = this.componentRegistry.get('scroll-pane')

        let contentPanel = $$(ScrollPane, {
            scrollbarPosition: 'right',
            overlay: ProseEditorOverlayTools,
        }).append(
            editor
        ).ref('contentPanel')

        el.append(
            $$(SplitPane, {splitType: 'horizontal'}).append(
                toolbar,
                contentPanel
            )
        )
        return el
    }

    _renderToolbar($$) {
        return $$(ToolbarViewer, {
            commandStates: {}
        }).ref('toolbar')
    }

    _renderEditor($$) {
        let configurator = this.props.configurator
        return $$(ContainerEditor, {
            disabled: true,
            documentSession: this.documentSession,
            node: this.doc.get('body'),
            commands: configurator.getSurfaceCommandNames(),
            textTypes: configurator.getTextTypes()
        }).ref('body')
    }
}

export default DocumentViewer;
