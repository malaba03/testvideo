app.factory('VideoModel', function($http) {
	var src,
		title,
		descrition,
		type;
	
	function VideoModel(data) {
		//Initialising video attributes
		this.src = "";
		this.title = "";
		this.descrition = "";
		this.type = "";
		//Loading video attributes from data received
        if (data) {
            this.setData(data);
        }
    };
    
    VideoModel.prototype = {
    	setData: function(data) {
            angular.extend(this, data);
        }
  	};
	return VideoModel;
}); 
