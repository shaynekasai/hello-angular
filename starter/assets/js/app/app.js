/*
 * Bootstrap your app with your startApp module. Modules are akin to 
 * a container for all of the other components (controllers, services,
 * directives, filters etc.) 
 *
 * starterApp is defined as part of the ng-app attribute in index.html
 *
 * You can pass in additional modules: For example,
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