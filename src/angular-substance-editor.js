'use strict';
var editorController = require('./editor.controller');
var config = require('./config');


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
                var editor = editorController(substanceService, config);
                editor.render();

            },
            template: '<substanceEditor></substanceEditor>'
        }
    }]);


