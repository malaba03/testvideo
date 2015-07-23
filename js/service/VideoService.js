app.factory('VideoService', function() {
	var player,
		options;
	
	function VideoService(idElement, src, type, options) {
		
		this.player = _V_(idElement, options, function() {
		  this.src({type: type, src: src});
		});
    };
    
    VideoService.prototype = {
    	play: function() {
    		console.log("playing..");
    		this.player.play();
        }
  	};
	return VideoService;
}); 
