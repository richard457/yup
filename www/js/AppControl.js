 // create the module and name it StrimUp
        // also include ngRoute for all our routing needs
    var StrimUp = angular.module('StrimUp', ['ngRoute','ui.bootstrap.modal']);
    // configure our routes
    StrimUp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });
    // create the controller and inject Angular's $scope
    StrimUp.controller('mainController', function($scope) {
        // create a message to display in our view
        
        $scope.message = 'Search any business in rwanda';
    });

    StrimUp.controller('aboutController', function($scope) {
        $scope.message = 'yup application it is the way of getting all business done around in rwanda by only a single click and have enought information about it, you may also need to register your own business to be listed here';
    });

    StrimUp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
