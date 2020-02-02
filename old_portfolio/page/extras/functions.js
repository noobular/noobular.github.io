//Global Variables
var DevelopmentMode = false;
var count;

// Changes the text on the jumbotron.
function EditJumbotron(title,JumboText){
	document.getElementById("jumbotron").innerHTML = '<h1 class="display-3">'+title+'</h1>' + '<p class="lead">'+JumboText+'</p>'
}

// Open Navigation for the side navigation bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Close Navigation for the side navigation bar
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function dm(func){
	if(DevelopmentMode == true){
		console.log(func)
	}
}


//Auto run for things.
$('[data-toggle="tooltip"]').tooltip(); 
$('#menutoggle').tooltip('show')