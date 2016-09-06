'use strict';
var editorController = require('./editor.controller');
var fixture = require('./fixture');
var config = require('./config');


angular.module('angular-substance-editor', [])
    .controller('Controller', ['$scope', function ($scope) {


        $scope.customer = {
            name: 'Naomi',
            address: 'test'
        };
    }])
    .directive('substance', function () {
        return {
            restrict: 'A',
            scope: {
                optionsxx: '='
            },
            compile: function () {
                var editor = editorController(fixture, config);
                return {
                    post: function (scope, element, attributes) {
                        editor.render();
                    }
                }
            },
            template: '<substanceEditor></substanceEditor>'
        }
    });




