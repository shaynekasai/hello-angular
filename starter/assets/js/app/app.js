/*
 * Bootstrap any Angular modules to be used by application. For example,
 * if you wanted to use the ngRoute module for routing, you would do:
 *  
 * app = angular.module('starterApp', ['ngRoute']);
 *
 * then you can setup your routes:
 *
 * app.config(['$routeProvider', function($routeProvider) {
 * 	  $routeProvider.
 *			when('/foo', {
 *
 * 	  }) ... 
 * }])
 */
app = angular.module('starterApp', []);