var Controllers = angular.module('Controllers', ['ui.bootstrap']);
var app = angular.module('app', ['ngRoute', 'Controllers']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider.
	when('/', {// route for the home page
		title: 'Home',
		templateUrl : 'view/home.html'
	}).
	when('/video/:videoName', {// route for a video page
		templateUrl : 'view/video.html',
		controller : 'VideoController'
	});
});

