Controllers.controller('VideoController', ['$scope', "$sce", '$routeParams', 'VideoService', function($scope, $sce, $routeParams, VideoService) {
	
	//var videoSrc = "https://github.com/malaba03/testvideo/blob/master/videos/video1.mp4";
	var videoSrc = "/videos/"+$routeParams.videoName,
		type = "video/"+$routeParams.type,
		options = {
		    'controls' : false,
		    'autoplay' : false,
		    'preload' : 'auto',
		    'width' : '640',
		    'height': '264',
		    'data-setup':'{}'
		};
	$scope.events = [];
	$scope.trustSrc = function(src) {
    	return $sce.trustAsResourceUrl(src);
  	};
  	
  	//$scope.videoModel = {src: videoSrc, type: "video/mp4"};
	
	$scope.videoService = new VideoService('video-id', $scope.trustSrc(videoSrc), type, options);
	
	$scope.isPlaying = false;
	
	$scope.play = function(){
		$scope.isPlaying = true;
		$scope.videoService.player.play();
		$scope.events.push({name: "Click Play: video"+videoSrc});
	};
	
	$scope.pause = function(){
		$scope.videoService.player.pause();
		$scope.isPlaying = false;
		$scope.events.push({name: "Click Pause: video"+videoSrc});
	};
	
	$scope.backward = function(){
		var currentTime = $scope.videoService.player.currentTime();
		
		$scope.videoService.player.currentTime(currentTime-5);
		
		$scope.events.push({name: "Click Backward: video"+videoSrc});
	};
	
	$scope.forward = function(){
		var currentTime = $scope.videoService.player.currentTime();
		$scope.videoService.player.currentTime(currentTime+2);
		$scope.events.push({name: "Click Forward: video"+videoSrc});
	};
	
	
}]);