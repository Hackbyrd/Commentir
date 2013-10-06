// onload page
$(document).ready(function() {
    $("#inputBox").hide();
    $("#hideButton").hide();
    $("#message").hide();
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Start Commentir Comments Box
var insert = "<div style = 'padding: 15px 20px 10px 20px; overflow: auto; width: 598px; min-height: 160px; background-color: none; margin-left: 225px; border-left: 1px solid #e3e3e3; border-right:1px solid #e3e3e3; border-bottom:1px solid #e3e3e3;'>"

// > Title with Name
insert = insert + "<h3 id='commentir-name' style = 'font-size: 22px;'>Commentir - </h3>";

// >> Start Scollable comments box
insert = insert + "<div style = 'padding: 5px 10px 3px 10px; margin-top: 15px; margin-bottom: 10px;width:576px; height:100px; background-color:none; overflow:auto; border: 1px solid #e3e3e3;'>";

// >> Start list comments
insert = insert + "<ul id='commentDisplay'>";

// >>> Add Comments
insert = insert + "<li id='firstComment'>There are no comments at the moment.</li>";




// >> End list comments
insert = insert + "</ul>";

// > End Scollable comments box
insert = insert + "</div>";

// js for buttons
//insert = insert + '<script type="text/javascript">function showInput() {$("#showButton").hide();$("#hideButton").show();$("#inputBox").show();};function hideInput() {$("#showButton").show();$("#hideButton").hide();$("#inputBox").hide();};</script>';

// show the rest of the extention
insert = insert + "<button id='showButton' onclick='showInput()' style = 'background-color: #db2a21; border-radius: 2px; color:white; padding:5px;'>Comment</button>";
insert = insert + "<button id='hideButton' onclick='hideInput()' style = 'background-color: #db2a21; border-radius: 2px; color:white; padding:5px;'>Hide</button>";
insert = insert + "<span id='message' style='margin-top:5px;color:green;float:right;'>Comment Submitted Successfully!</span>";

// > Start InputBox
insert = insert + "<div id='inputBox' style = 'padding-top: 9px; margin-top: 10px;width:596px; min-height:70px; background-color:none; overflow:auto; border-top: 1px solid #e3e3e3;'>";

// >> Start input boxes

// >>> Start Left Time and buttons box
insert = insert + "<div style='background-color: none;min-height:70px; float: left; width:139px; margin-right: 10px'>";
insert = insert + "<input id='timeBox' type='text' placeholder='Time' style = 'width: 133px;margin-bottom: 20px;'></br>";
insert = insert + "<button id='resetButton' style = 'width: 64px; text-align:center;background-color: #db2a21; border-radius: 2px; color:white; padding:5px;float:left;margin-right:10px;'>Reset</button>";
insert = insert + "<button id='submitButton' style = 'width: 64px; text-align:center;background-color: #db2a21; border-radius: 2px; color:white; padding:5px;float:left;'>Submit</button>";
insert = insert + "</div>";

// >>>> Start Right Comment Box
insert = insert + "<div style='background-color: none;float:left;min-height:70px;width:437px;margin-left:10px;'>";
insert = insert + "<textarea id='commentBox' placeholder='Your Comment' style='-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;width: 100%;' rows=4></textarea></br>";
insert = insert + "</div>";

// > End InputBox
insert = insert + "</div>";

// End Commentir Comments Box
insert = insert + "</div>";

$("#player").after(insert);

// button functions
var h = document.createElement('script');
h.src = chrome.extension.getURL("buttons.js");
h.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(h);

// button css hover
// var link = document.createElement("link");
// link.href = "button-hovers.css";
// link.type = "text/css";
// link.rel = "stylesheet";
// document.getElementsByTagName("head")[0].appendChild(link);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var s = document.createElement('script');
s.src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
s.onload = function() {
	this.parentNode.removeChild(this);
};
(document.head).appendChild(s);

var s = document.createElement('script');
s.src = "https://cdn.firebase.com/v0/firebase.js";
s.onload = function() {
	this.parentNode.removeChild(this);
};
(document.head).appendChild(s);

var s = document.createElement('script');
s.src = "https://cdn.firebase.com/v0/firebase-simple-login.js";
s.onload = function() {
	this.parentNode.removeChild(this);
};
(document.head).appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL("authenticate.js");
s.onload = function() {
	this.parentNode.removeChild(this);
};
(document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL("comment.js");
s.onload = function() {
	this.parentNode.removeChild(this);
};
(document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = "https://cdn.firebase.com/v0/firebase.js";
s.onload = function() {
	this.parentNode.removeChild(this);
};
(document.head).appendChild(s);

