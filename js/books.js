'use strict';

(function () {

    var app = angular.module('books-module', []);

    var appInfo = {
        name: 'Angular Course',
        description: 'Get things done with AngularJS',
        author: 'Carlos Eduardo Papacidero'
    };

    app.controller('MainController', function () {
        this.info = appInfo;
    });

    app.controller('ReviewController', function () {
        this.reviewAdded = false;
        this.review = {};
        this.addReview = function (book) {
            book.reviews.push(this.review);
            this.review = {};
        };
    });

    app.directive('bookTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'book-title.html'
        };
    });

    app.controller('MainController', function ($scope, $http) {
        $scope.info = '';
        $http.get('js/appInfo.json').success(function (data) {
            $scope.info = data;
        });
    });

    app.controller('DetailController', function ($scope, $http) {
        $scope.name = 'Papacidero';
    });

    app.controller('StoreController', function ($scope, $http) {
        $scope.book = '';
        $http.get('js/data.json').success(function (data) {
            $scope.book = data;
        });
    });

    app.controller('TabsController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });
})();