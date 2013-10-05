// > means indents

// Start Commentir Comments Box
var insert = "<div style = 'padding: 20px; width: 598px; height: 160px; background-color: none; margin-left: 225px; border-left: 1px solid #e3e3e3; border-right:1px solid #e3e3e3; border-bottom:1px solid #e3e3e3;'>"

// > Title with Name
insert = insert + "<h3>Commentir - Jonathan Chen</h3>";

// >> Start Scollable comments box
insert = insert + "<div style = 'padding: 5px 10px 3px 10px; margin-top: 10px; margin-bottom: 10px;width:576px; height:100px; background-color:none; overflow:auto; border: 1px solid #e3e3e3;'>";

// >> Start list comments
insert = insert + "<ul>";

// >>> Add Comments
insert = insert + "<li style = 'margin-bottom: 7px;'><div style = 'float: left; width: 56px;background-color:none;margin-bottom: 7px;'> > 99:29</div> <div style = 'float:left;width:520px;background-color:none;margin-bottom: 7px;'>Sawyer Symington: This part is so funny!</div></li>";
insert = insert + "<li style = 'margin-bottom: 7px;'><div style = 'float: left; width: 56px;background-color:none;margin-bottom: 7px;'> > 42:29</div> <div style = 'float:left;width:520px;background-color:none;margin-bottom: 7px;'>Sawyer Symington: This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny!</div></li>";
insert = insert + "<li style = 'margin-bottom: 7px;'><div style = 'float: left; width: 56px;background-color:none;margin-bottom: 7px;'> > 32:29</div> <div style = 'float:left;width:520px;background-color:none;margin-bottom: 7px;'>Sawyer Symington: This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny!</div></li>";
insert = insert + "<li style = 'margin-bottom: 7px;'><div style = 'float: left; width: 56px;background-color:none;margin-bottom: 7px;'> > 22:29</div> <div style = 'float:left;width:520px;background-color:none;margin-bottom: 7px;'>Sawyer Symington: This part is so funny!</div></li>";
insert = insert + "<li style = 'margin-bottom: 7px;'><div style = 'float: left; width: 56px;background-color:none;margin-bottom: 7px;'> > 12:29</div> <div style = 'float:left;width:520px;background-color:none;margin-bottom: 7px;'>Sawyer Symington: This part is so funny! This part is so funny! This part is so funny! This part is so funny! This part is so funny! </div></li>";
insert = insert + "<li style = 'margin-bottom: 7px;'><div style = 'float: left; width: 56px;background-color:none;margin-bottom: 7px;'> > 07:29</div> <div style = 'float:left;width:520px;background-color:none;margin-bottom: 7px;'>Sawyer Symington: This part is so funny!</div></li>";
insert = insert + "<li style = 'margin-bottom: 7px;'><div style = 'float: left; width: 56px;background-color:none;margin-bottom: 7px;'> > 02:29</div> <div style = 'float:left;width:520px;background-color:none;margin-bottom: 7px;'>Sawyer Symington: This part is so funny!</div></li>";


// >> End list comments
insert = insert + "</ul>";

// > End Scollable comments box
insert = insert + "</div>";

insert = insert + "<button id='commentButton' style = 'background-color: #db2a21; border-radius: 2px; color:white; padding:5px;'>Comment</button>"

// End Commentir Comments Box
insert = insert + "</div>";

$("#player").after(insert);

var s = document.createElement('script');
s.src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
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


var insert = 
['<div id="dialog-form" title="Create new user">',
'  <p class="validateTips">All form fields are required.</p>',
' ',
'  <form>',
'  <fieldset>',
'    <label for="name">Name</label>',
'    <input type="text" name="name" id="name" class="text ui-widget-content ui-corner-all" />',
'    <label for="email">Email</label>',
'    <input type="text" name="email" id="email" value="" class="text ui-widget-content ui-corner-all" />',
'    <label for="password">Password</label>',
'    <input type="password" name="password" id="password" value="" class="text ui-widget-content ui-corner-all" />',
'  </fieldset>',
'  </form>',
'</div>'].join('\n');
(document.documentElement).appendChild(insert);

