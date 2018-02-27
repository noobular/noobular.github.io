function GenerateSkills(language){
	$('#tab_projects').removeClass('active');
	$('#tab_hackathons').removeClass('active');
	$('#tab_jobs').removeClass('active');
	$('#tab_ideologies').removeClass('active');
	$('#tab_contact').removeClass('active');
	$('#tab_languages').removeClass('active');
	$('#tab_skills').addClass('active');
	EditJumbotron("Skills","This is self grading of Languages, frameworks, tools, and operating systems and positioned from most to least personal interest.")
	original = language;
	language = language.toLowerCase()
	$("#projectlist").empty()

	$(data_skills).each(function(index){
		dm(data_skills[index]);
		CreateProjectCardskillls(index,data_skills[index].title,data_skills[index].grade)
	});



	if(document.getElementById("projectlist").innerHTML == ""){
		cont = document.createElement("div")
		$(cont).addClass("container col-12")

		alert = document.createElement("div");
		$(alert).addClass("alert alert-dismissible alert-info");
		alert.style = "text-align:center; font-size:36px; font-weight:bold; "
		alert.innerHTML = "No data_skills were found..."

		cont.appendChild(alert)
		document.getElementById("projectlist").appendChild(cont)
	}

	document.getElementById("category").innerHTML = "Languages"

	GenerateFrameworks()
	GenerateTools()
	GenerateOS()

}

function GenerateFrameworks(){
	cont = document.createElement("div")
	$(cont).addClass('font-text-bold category col-sm-12 col-md-12 col-xs-12')
	$(cont).attr('style','font-size:64px; text-align:center; font-style:underline; padding-bottom:15px; margin-bottom:0px; overflow-x:hidden;')
	cont.innerHTML = "Frameworks"
	document.getElementById("projectlist").appendChild(cont)

	$(data_frameworks).each(function(index){
		dm(data_frameworks[index]);
		CreateProjectCardskillls(index,data_frameworks[index].title,data_frameworks[index].grade)
	});
}

function GenerateTools(){
	cont = document.createElement("div")
	$(cont).addClass('font-text-bold category col-sm-12 col-md-12 col-xs-12')
	$(cont).attr('style','font-size:64px; text-align:center; font-style:underline; padding-bottom:15px; margin-bottom:0px; overflow-x:hidden;')
	cont.innerHTML = "Tools"
	document.getElementById("projectlist").appendChild(cont)

	$(data_tools).each(function(index){
		dm(data_tools[index]);
		CreateProjectCardskillls(index,data_tools[index].title,data_tools[index].grade)
	});
}

function GenerateOS(){
	cont = document.createElement("div")
	$(cont).addClass('font-text-bold category col-sm-12 col-md-12 col-xs-12')
	$(cont).attr('style','font-size:64px; text-align:center; font-style:underline; padding-bottom:15px; margin-bottom:0px; overflow-x:hidden;')
	cont.innerHTML = "Operating Systems"
	document.getElementById("projectlist").appendChild(cont)

	$(data_os).each(function(index){
		dm(data_os[index]);
		CreateProjectCardskillls(index,data_os[index].title,data_os[index].grade)
	});
}
function CreateProjectCardskillls(index,title,grade){
	// Element Creation
	container = document.createElement("div")
	card = document.createElement("div")
	cardheader = document.createElement("div")
	cardbadge = document.createElement("span")

	// Element Class Change
	$(container).addClass("col-sm-12 col-md-2 col-xs-12")
	$(card).addClass("card mb-3")
	$(cardheader).addClass("card-header")

	if(grade[0] <= 3){
		$(cardbadge).addClass("badge badge-danger")
	}
	if(grade[0] >= 7){
		$(cardbadge).addClass("badge badge-success")
	}
	if(grade[0] > 3 && grade[0] < 7){
		$(cardbadge).addClass("badge badge-warning")
	}

	// Element Text/style Change
	cardheader.innerHTML = title
	cardbadge.innerHTML = grade[0] + " / 10"
	cardbadge.style = "float:right; font-size:16px;"

	// Appending Elements
	container.appendChild(card)
	card.appendChild(cardheader)
	cardheader.appendChild(cardbadge)

	document.getElementById("projectlist").appendChild(container)
	count++;
}