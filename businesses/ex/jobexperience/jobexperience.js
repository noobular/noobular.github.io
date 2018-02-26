/*
	EXAMPLE PROJECT

	{
		"title": "",
		"position": [""],
		"role":[""],
		"description":"",
		"images":[],
		"skills":[],
		"github":"",
		"other":["",""],       // [0] = name shown; [1] = link; 
	},
*/
var count;
var jobs = [
	{
		"title": "Red apple",
		"position" : ["Dish Washer"],
		"role":["Physical Labour"],
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":["More hands on work with LUA and creation automation.","Exposure in the community, gaining a larger audience for future addons."],
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":["",""],
		"date":"February 1, 2018"
	},
	{
		"title": "The Henry Ford, Green Field Village",
		"position" : ["Historical Presenter / Farmer"],
		"role":["Physical Labour"],
		"description":"The job was pretty simple, inform the visitors that come to the village about my specific location and the historical importance of it, along with taking care of the farm as a whole.",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":["More hands on work with LUA and creation automation.","Exposure in the community, gaining a larger audience for future addons."],
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":["",""],
		"date":"February 1, 2018"
	}
]

function Generatejobs(language){
	$('#tab_projects').removeClass('active');
	$('#tab_skills').removeClass('active');
	$('#tab_hackathons').removeClass('active');
	$('#tab_ideologies').removeClass('active');
	$('#tab_contact').removeClass('active');
	$('#tab_languages').removeClass('active');
	$('#tab_jobs').addClass('active');
	EditJumbotron("Job Experience","All of my job experience, including non-programming positions.")

	if(language !== "All"){
		$("#projectlist").empty()
		console.log($('#projectlist'))
	}else{
		$("#projectlist").empty()
		$(jobs).each(function(index){
			CreateProjectCardjob(index,jobs[index].title,jobs[index].position,jobs[index].role,jobs[index].description,jobs[index].images,jobs[index].skills,jobs[index].github,jobs[index].other,jobs[index].date)
		})		
	}

	$(jobs).each(function(index){
		if (language !== "All"){
			if (language == "Web Development" || language == "Game Development" || language == "Software Development" || language == "Server Development"){
				$(jobs[index].role).each(function(i){
					if(jobs[index].role[i] == language){
						CreateProjectCardjob(index,jobs[index].title,jobs[index].position,jobs[index].role,jobs[index].description,jobs[index].images,jobs[index].skills,jobs[index].github,jobs[index].other,jobs[index].date)	
					}
				})
			}else{
				$(jobs[index].position).each(function(i){
					if(jobs[index].position[i] == language){
						CreateProjectCardjob(index,jobs[index].title,jobs[index].position,jobs[index].role,jobs[index].description,jobs[index].images,jobs[index].skills,jobs[index].github,jobs[index].other,jobs[index].date)	
					}
				})
			} // end of is role?
		}
	});

	if(document.getElementById("projectlist").innerHTML == ""){
		console.log("InnerHTML = '' ")
		cont = document.createElement("div")
		$(cont).addClass("container col-12")

		alert = document.createElement("div");
		$(alert).addClass("alert alert-dismissible alert-info");
		alert.style = "text-align:center; font-size:36px; font-weight:bold; "
		alert.innerHTML = "No jobs were found..."

		cont.appendChild(alert)
		document.getElementById("projectlist").appendChild(cont)
	}

	document.getElementById("category").innerHTML = language + " jobs" 

}

// CreateProjectCardjob(index,jobs[index].title,jobs[index].position,jobs[index].role,jobs[index].description,jobs[index].images,jobs[index].skills,jobs[index].github,jobs[index].other,jobs[index].date)	

function CreateProjectCardjob(index,title,position,role,description,images,skills,github,other,date){
	carouselid = "carousel"+index;

	// Element Creation
	container = document.createElement("div")
		card = document.createElement("div")
			cardheader = document.createElement("h3")
			cardbody = document.createElement("div")
				cardtitle = document.createElement("h5")
				cardsubtitle = document.createElement("h6")

			carousel = document.createElement("div")
				carouselinner = document.createElement("div")
				
				carouselcontrolprev = document.createElement("a")
					carouselcontrolprevimg = document.createElement("span")
				carouselcontrolnext = document.createElement("a")
					carouselcontrolnextimg = document.createElement("span")

			cardbody2 = document.createElement("div")
				descriptiontext = document.createElement("span")
				descriptiontext.innerHTML = "<b>Description</b>"
				cardbody2.appendChild(descriptiontext)

				cardtext = document.createElement("p")
				listcontainer = document.createElement("ul")
				cardbody3 = document.createElement("div")
				cardfooter = document.createElement("div") 

	// Element Class Change
	$(container).addClass("col-sm-12 col-md-3 col-xs-12")
	$(card).addClass("card mb-3")
	$(cardheader).addClass("card-header")
	$(cardbody).addClass("card-body")
	$(cardtitle).addClass("card-title")
	$(cardsubtitle).addClass("card-subtitle text-muted")
	$(carousel).addClass("carousel slide carouselimg")
	$(carouselinner).addClass("carousel-inner")
	$(carouselcontrolprev).addClass("carousel-control-prev")
	$(carouselcontrolnext).addClass("carousel-control-next")
	$(carouselcontrolprevimg).addClass("carousel-control-prev-icon")
	$(carouselcontrolnextimg).addClass("carousel-control-next-icon")
	$(cardbody2).addClass("card-body")
	$(cardtext).addClass("card-text")
	$(listcontainer).addClass("list-group list-group-flush")
	$(cardbody3).addClass("card-body")
	$(cardfooter).addClass("card-footer text-muted")




	// Element ID Change
	$(carousel).attr("id",carouselid);

	// Element Text Change

	cardheader.innerHTML = title
	cardtitle.innerHTML = "Job Position;  Type of work"
	cardsubtitle.innerHTML = position.join(", ") + "<br>" + role.join(", ")
	cardtext.innerHTML = description
	cardfooter.innerHTML = date

	// Attribute Changes
	$(carousel).attr("data-ride","carousel")
	$(carouselcontrolnext).attr("data-slide","next")
	$(carouselcontrolprev).attr("data-slide","prev")
	$(carouselcontrolnext).attr("href","#"+carouselid)
	$(carouselcontrolprev).attr("href","#"+carouselid)



	// Embeding Elements
	cardbody.appendChild(cardtitle)
	cardbody.appendChild(cardsubtitle)

	carousel.appendChild(carouselinner)
	carouselcontrolprev.appendChild(carouselcontrolprevimg)
	carouselcontrolnext.appendChild(carouselcontrolnextimg)
	carousel.appendChild(carouselcontrolprev)
	carousel.appendChild(carouselcontrolnext)

	cardbody2.appendChild(cardtext)
	if (github !== ""){
		githube = document.createElement("a")
		$(githube).addClass("card-link")
		githube.innerHTML = "Github Link"
		$(githube).attr("href",github)
		$(githube).attr("target","_blank")
		cardbody3.appendChild(githube)

	}

	if(other[0] !== ""){
		othere = document.createElement("a")
		$(othere).addClass("card-link")
		othere.innerHTML = other[0]
		$(othere).attr("href",other[1])
		$(othere).attr("target","_blank")
		cardbody3.appendChild(othere)
	}

	// Automated Element Creation
		//Carousel Item / Image element Creation
		items = [];
		imgs = [];

		$(images).each(function(index){ 
			console.log("IRAN " + index )
			items[index] = document.createElement("div") // Carouselitems
			imgs[index] = document.createElement("img")  // carouselimgs

			if(index == 0){
				$(items[index]).addClass("carousel-item active")
			}else{
				$(items[index]).addClass("carousel-item")
			}
			
			$(imgs[index]).addClass("carouselimg")

			$(imgs[index]).attr("src",images[index])

			$(imgs[index]).attr("alt","img"+carouselid+index)

			items[index].appendChild(imgs[index]);
			carouselinner.appendChild(items[index])
		});

		skill = []
		$(skills).each(function(index){ 
			console.log("IRAN " + index )
			skill[index] = document.createElement("a")  // skill text

			$(skill[index]).addClass("list-group-item")

			skill[index].innerHTML = "<b>Skill increase " + (index + 1) + "</b><br>" + skills[index]

			listcontainer.appendChild(skill[index])
		});

	//Actual Main Object Appending
	container.appendChild(card)
		card.appendChild(cardheader)
		card.appendChild(cardbody)
		card.appendChild(carousel)
		card.appendChild(cardbody2)
		card.appendChild(listcontainer)
		if(cardbody3.innerHTML !== ""){
			card.appendChild(cardbody3)
		}
		card.appendChild(cardfooter)

	document.getElementById("projectlist").appendChild(container)
	count++;
}

currentSearch = document.getElementById("langsearch").innerHTML