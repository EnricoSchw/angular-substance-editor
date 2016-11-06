import {Component} from "substance";

class ToolbarViewer extends Component {
    render($$) {
        let el = $$("div").addClass(this.getClassNames())
        return el
    }

    getClassNames() {
        return 'sc-toolbar';
    }
}

export default ToolbarViewer;
