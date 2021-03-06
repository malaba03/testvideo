app.directive('ngVideo', function($window) {
	// constants
	var player;

	return {
		restrict : 'E',
		scope : {
			model : '='
		},
		link : function(scope, element, attrs) {
			scope.$watch('model', function(newVal, oldVal) {				
				// clear the elements inside of the directive
				// if 'val' is undefined, exit
				if (!newVal) {
					//return;
				}
				
				console.log(newVal);
			});
		}
	};
}); 