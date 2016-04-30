// Notice here how it's attached to app
app.controller('BasicController', function($scope) {
	// What is $scope? It's the application object (owner of variables and functions) - https://docs.angularjs.org/guide/scope
    $scope.somevar = 'foo';
});