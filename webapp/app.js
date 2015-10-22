'use strict';

var sreWebApp = angular.module("sreWebApp", ['ngRoute']);

sreWebApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/personalDetails', {
      templateUrl: 'partials/personalDetails.html', controller: 'personalDetailsController'
   }).
   
   when('/home', {
      templateUrl: 'partials/home.html', controller: 'homeController'
   }).

   otherwise({
      redirectTo: '/home'
   });

	
}]);