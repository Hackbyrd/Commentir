var commentButton = document.getElementById("commentButton");
var submitButton = document.getElementById("submitButton");
var videoPlayer;
var __c_ui;
function onYouTubePlayerReady(playerId) {
      videoPlayer = document.getElementById("movie_player");
}
__c_ui = new CommentirUI();
// cb.onclick = function(){
// 	videoPlayer.pauseVideo();
// 	// $('#timeBox').val(secondsToString(videoPlayer.getCurrentTime());
// 	// var comment = $('#commentBox').val();
// 	// var videoUrl = videoPlayer.getVideoUrl();
// 	// var time = stringToSeconds($('#timeBox').val());
// 	self._spinner.spin($("#login-div").get(0));
//     self._firefeed.login('facebook');	
// };

//commentButton.click(self._postHandler.bind(self));
//submitButton.click(self._postHandler.bind(self));

function secondsToString(seconds){
	var minutes = Math.floor(seconds/60);
	var seconds = seconds % 60;
	return minutes + ":" + seconds;
}

function stringToSeconds(minuteString){
	var timeString = minuteString.split(":");
	var minutes = timeString[0];
	var seconds = timeString[1];
	return parseInt(minutes) * 60 + parseInt(seconds);
}

function CommentirUI() {
	this._limit = 140;
	this._loggedIn = false;
	this._commentir = new Commentir("https://commentir.firebaseio.com/");

	alert("constructor 2");
	this._unload = null;

	var self = this;

	self._commentir.onLoginStateChange(function(error, user) {
    	self.onLoginStateChange(error, user);
  	});

  	self._commentir.login('twitter');
}

CommentirUI.prototype._postHandler = function(e) {
	// var comment = $('#commentBox').val();
	// var videoUrl = videoPlayer.getVideoUrl();
	// var time = stringToSeconds($('#timeBox').val());
	var comment = $('#commentBox').val();
	var videoUrl = videoPlayer.getVideoUrl();
	var time = stringToSeconds($('#timeBox').val());
	alert("fd");
	var self = this;
	alert("fsfd");
	__c_ui._commentir.post(comment, videoUrl, time, function(err, done) {
    if (!err) {
      $('#commentBox').val("");
      hideInput();
		$("#message").show();
		window.setTimeout("fadeMessage();", 5000);
    } else {
      alert("Posting failed!");
    }
    submitButton.onclick = self._postHandler;
   });
 };

CommentirUI.prototype.renderTimeline = function(info) {
	var self = this;
	submitButton.onclick = self._postHandler;
};

CommentirUI.prototype.onLoginStateChange = function(error, info) {
  this._loggedIn = info;
  if (info) {
    this.renderTimeline(info);
  } else {
  }
};


