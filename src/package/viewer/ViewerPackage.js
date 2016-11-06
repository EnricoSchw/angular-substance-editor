import BasePackage from "substance";
import ProseArticle from "substance";

export default {
    name: 'prose-editor',
    configure: function (config) {
        config.defineSchema({
            name: 'prose-article',
            ArticleClass: ProseArticle,
            defaultTextType: 'paragraph'
        })

        // SwitchTextType, Undo/Redo etc.
        config.import(BasePackage)
    }
}
