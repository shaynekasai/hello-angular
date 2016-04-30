dashboard.controller('DashboardController', function($scope) {
    $scope.displayNotice = function() {
    	// You can also pass objects to $scope and reference its properties.
        $scope.messages = {
        	notice: 'Hello World!'
        };
    };

});