/*
  Aside from $scope, you can pass in other services

  Example: app.controller('ListController', ['$scope', '$http', function($scope, $http) {

  The above gives you access to $http so you can make requests (XMLHttpRequest or JSONP).
 */
app.controller('ListController', ['$scope', function($scope) {
    $scope.colorData = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ];

    /* let's create some methods */
    $scope.popColorData = function() {
        $scope.colorData.pop();
    };

    $scope.pushColorData = function() {
        $scope.colorData.push({'color': 'black', value: '#000000'});
    };

}]);