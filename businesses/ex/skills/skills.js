var DevelopmentMode = false;
var count;

var Skillsss = [
	{"title": "C++",         	"position" : ["1"]},
	{"title": "C#",		     	"position" : ["8"]},
	{"title": "C",           	"position" : ["8"]},
	{"title": "Dart",        	"position" : ["0"]},
	{"title": "Go",          	"position" : ["0"]},
	{"title": "HTML",        	"position" : ["9"]},
	{"title": "Java",       	"position" : ["0"]},
	{"title": "JavaScript", 	"position" : ["9"]},
	{"title": "JQuery",     	"position" : ["8"]},
	{"title": "Lua",         	"position" : ["8"]},
	{"title": "MySQL",       	"position" : ["8"]},
	{"title": "NodeJS",      	"position" : ["1"]},
	{"title": "Python",      	"position" : ["9"]},
	{"title": "PHP",         	"position" : ["8"]},
	{"title": "Visual Basic",	"position" : ["4"]}
]

function GenerateSkills(language){
	$('#tab_projects').removeClass('active');
	$('#tab_hackathons').removeClass('active');
	$('#tab_jobs').removeClass('active');
	$('#tab_ideologies').removeClass('active');
	$('#tab_contact').removeClass('active');
	$('#tab_languages').removeClass('active');
	$('#tab_skills').addClass('active');
	EditJumbotron("Skills","This is self grading of Languages, frameworks, and tools!")
	original = language;
	language = language.toLowerCase()
	$("#projectlist").empty()
	$(Skillsss).each(function(index){
		console.log(Skillsss[index])
		CreateProjectCardskillls(index,Skillsss[index].title,Skillsss[index].position)
	});

	if(document.getElementById("projectlist").innerHTML == ""){
		if(DeveleopmentMode == true){console.log("InnerHTML = '' ")}
		cont = document.createElement("div")
		$(cont).addClass("container col-12")

		alert = document.createElement("div");
		$(alert).addClass("alert alert-dismissible alert-info");
		alert.style = "text-align:center; font-size:36px; font-weight:bold; "
		alert.innerHTML = "No Skillsss were found..."

		cont.appendChild(alert)
		document.getElementById("projectlist").appendChild(cont)
	}

	document.getElementById("category").innerHTML = "Knowledge of Languages"

}

function CreateProjectCardskillls(index,title,position){
	// Element Creation
	container = document.createElement("div")
	card = document.createElement("div")
	cardheader = document.createElement("div")
	cardbadge = document.createElement("span")

	// Element Class Change
	$(container).addClass("col-sm-12 col-md-2 col-xs-12")
	$(card).addClass("card mb-3")
	$(cardheader).addClass("card-header")

	if(position[0] <= 3){
		$(cardbadge).addClass("badge badge-danger")
	}
	if(position[0] >= 7){
		$(cardbadge).addClass("badge badge-success")
	}
	if(position[0] > 3 && position[0] < 7){
		$(cardbadge).addClass("badge badge-warning")
	}

	// Element Text/style Change
	cardheader.innerHTML = title
	cardbadge.innerHTML = position[0] + " / 10"
	cardbadge.style = "float:right; font-size:16px;"

	// Appending Elements
	container.appendChild(card)
	card.appendChild(cardheader)
	cardheader.appendChild(cardbadge)

	document.getElementById("projectlist").appendChild(container)
	count++;
}