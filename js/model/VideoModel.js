app.factory('VideoModel', function($http, dataService) {
	var url,
		title,
		descrition,
		author;
	
	function VideoModel(data) {
		//Initialising video attributes
		this.url = "";
		this.title = "";
		this.descrition = "";
		this.author = "";
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
