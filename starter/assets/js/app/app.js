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

/*
 * You can also build your application using multiple modules. For scalability, you may want to consider
 * breaking your application into parts, as some would suggest, by functionality.
 *
 * angular.module('UserList', []);
 * angular.module('Stats', []);
 * angular.module('Comments', [])
 * angular.module('Dashboard', ['Stats', 'Comments']);
 * angular.module('MainApplication', ['UserList', 'Dashboard'])
 *
 */
 
 
 
