'use strict';

(function () {
    var app = angular.module('bookStore', ['ngRoute','books-module']);
    
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.
        when('/list', {
            templateUrl: 'partials/list.html',
            
        }).
        when('/teste', {
            templateUrl: 'partials/teste.html',
            
        }).
        when('/details/:itemId', {
            templateUrl: 'partials/detail.html',
            controller: 'DetailController'
            
        }).
        otherwise({
            redirectTo: '/list'
        });
    }]);
    
})();