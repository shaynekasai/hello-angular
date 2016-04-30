/*
 * In this example, we're exploring how we can split up an app by modules.
 * This is just one approach, there are other ways.
 *
 * Homework: look up $scope.emit and $scope.on to learn one way of communicating
 * between controllers.
 */
var dashboard = angular.module("Dashboard", []);
var users = angular.module("Users", []);

angular.module("DashboardApp", ["Dashboard", "Users"]);