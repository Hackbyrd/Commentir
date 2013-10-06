var commentButton = document.getElementById("commentButton");
var submitButton = document.getElementById("submitButton");
var videoPlayer = document.getElementById("movie_player");
var __c_ui;
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
	alert("constructor 1");
	this._commentir = new Commentir("https://commentir.firebaseio.com/");

	alert("constructor 2");
	this._unload = null;

	var self = this;

	self._commentir.onLoginStateChange(function(error, user) {
    	self.onLoginStateChange(error, user);
  	});

	alert("login");
  	self._commentir.login('twitter');
}

CommentirUI.prototype._postHandler = function(e) {
	// var comment = $('#commentBox').val();
	// var videoUrl = videoPlayer.getVideoUrl();
	// var time = stringToSeconds($('#timeBox').val());
	alert("1");
	var comment = "Weird shit";
	var videoUrl = videoPlayer.getVideoUrl();
	var time = stringToSeconds("1:01");
	alert("fd");
	var self = this;
	alert("fsfd");
	__c_ui._commentir.post(comment, videoUrl, time, function(err, done) {
    if (!err) {
      $('#commentBox').val("");
    } else {
      alert("Posting failed!");
    }
    commentButton.onclick = self._postHandler;
   });
 };

CommentirUI.prototype.renderTimeline = function(info) {
	var self = this;
	commentButton.onclick = self._postHandler;
};

CommentirUI.prototype.onLoginStateChange = function(error, info) {
  this._loggedIn = info;
  if (info) {
    this.renderTimeline(info);
  } else {
  }
};


