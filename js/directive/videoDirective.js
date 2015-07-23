app.directive('ngVideo', function($window) {
	// constants
	var margin = 80,
        width = 500,
        elemId = 'imprint_and_consumption';

	return {
		restrict : 'E',
		scope : {
			val : '='
		},
		link : function(scope, element, attrs) {
			scope.$watch('val', function(newVal, oldVal) {				
				// clear the elements inside of the directive
				// if 'val' is undefined, exit
				if (!newVal) {
					return;
				}

			});
		}
	};
}); 