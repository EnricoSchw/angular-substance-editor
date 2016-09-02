'use strict';
var proseExample = require('./editor.controller');
var fixture = require('./fixture');
var config = require('./config');


angular.module('angular-substance-editor', [])
    .controller('Controller', ['$scope', function ($scope) {

        proseExample(fixture, config);

        $scope.customer = {
            name: 'Naomi',
            address: 'test'
        };
    }])
    .directive('substance', function () {
        return {
            //template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };
    });

