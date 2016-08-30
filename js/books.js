'use strict';

(function () {

    var app = angular.module('books-module', []);

    var appInfo = {
        name: 'Angular Course',
        description: 'Get things done with AngularJS',
        author: 'Carlos Eduardo Papacidero'
    };

    var books = [{
        name: 'Angular Course',
        author: 'Carlos Eduardo Papacidero',
        url: 'http://www.linkedin.com/papacidero',
        desc: '',
        price: 55.99,
        disabled: true,
        reviews: [{
            stars: '5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }, {
            stars: '4',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }, {
            stars: '3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }, {
            stars: '2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }, {
            stars: '1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }, {
            stars: '5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }]
    }, {
        name: 'Ember Course',
        author: 'Rael Riolino',
        url: 'http://www.linkedin.com/rael',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 57.99,
        disabled: false,
        reviews: [{
            stars: '5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }]
    }, {
        name: 'Angular Course',
        author: 'Carlos Eduardo Papacidero',
        url: 'http://www.linkedin.com/papacidero',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 55.99,
        disabled: true,
        reviews: [{
            stars: '5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }]
    }, {
        name: 'Ember Course',
        author: 'Rael Riolino',
        url: 'http://www.linkedin.com/rael',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 57.99,
        disabled: false,
        reviews: [{
            stars: '5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }]
    }, {
        name: 'Angular Course',
        author: 'Carlos Eduardo Papacidero',
        url: 'http://www.linkedin.com/papacidero',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 55.99,
        disabled: true,
        reviews: [{
            stars: '5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }]
    }, {
        name: 'Ember Course',
        author: 'Rael Riolino',
        url: 'http://www.linkedin.com/rael',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 57.99,
        disabled: false,
        reviews: [{
            stars: '5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'papacidero@gmail.com'
        }]
    }];

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

    app.controller('MainController', function () {
        this.info = appInfo;
    });

    app.controller('StoreController', function () {
        this.book = books;
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