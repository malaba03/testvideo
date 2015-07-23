Controllers.controller('VideoController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.videoName = $routeParams.videoName;
}]);