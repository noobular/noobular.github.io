// Changes the text on the jumbotron.
function EditJumbotron(title,JumboText){
	document.getElementById("jumbotron").innerHTML = '<h1 class="display-3">'+title+'</h1>' + '<p class="lead">'+JumboText+'</p>'
}