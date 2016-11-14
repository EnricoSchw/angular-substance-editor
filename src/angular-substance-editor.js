import Editor from "./package/editor/Editor";
import Viewer from "./package/viewer/Viewer";

angular.module('angular-substance-editor', [])
    .controller('Controller', ['$scope', function ($scope) {
    }])
    .directive('substance', ['SubstanceService', function (substanceService) {
        return {
            restrict: 'A',
            scope: {
                optionsxx: '='
            },
            link: function (scope, element, attributes) {
                if (attributes.type == "editor") {
                    var editor = new Editor(substanceService);
                    editor.render();
                }

                if (attributes.type == "viewer") {
                    var viewer = new Viewer(substanceService);
                    viewer.render();
                }

            },
            template: '<substanceEditor></substanceEditor>'
        }
    }]);


