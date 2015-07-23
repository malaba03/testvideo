Controllers.controller('DefaultController', function($scope, $modal, $log) {
	$scope.openModal = function (templateUrl, size) {
		var modalInstance = $modal.open({
			templateUrl : templateUrl,
			controller : 'SearchController',
			size: size,
		});
	
		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
	
});

Controllers.controller('SearchController', ['$scope', '$location', '$log', '$modalInstance', function($scope, $location, $log, $modalInstance) {
	
	$scope.url = "video1.mp4";
	$scope.type = "mp4";
	
	$scope.cancelModal = function () {
		$modalInstance.dismiss('cancel');
  	};
  	
	$scope.searchVideo = function(){
		$modalInstance.dismiss('cancel');
  		$location.path('/video/'+$scope.url+'/'+$scope.type);
	};
}]);
