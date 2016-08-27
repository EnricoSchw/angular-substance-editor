/*global MediumEditor */
'use strict';

angular.module('angular-substance-editor', [])
    .controller('Controller', ['$scope', function ($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('substance', function () {
        return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };
    });
