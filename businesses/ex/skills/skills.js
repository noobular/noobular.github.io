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
var DevelopmentMode = false;
var count;
var skills = [
	{
		"title": "MHacks 8",
		"position" : ["No Place"],
		"role":["Type: Create something awesome!"],
		"description":"Create whatever you want within the given timespan which was 36 hours, with many mentors to help the hackers if they are having any issues.",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":[],
		"github":"",
		"other":["",""],
		"date":"October 7-9, 2016"
	}
]

function Generateskills(language){
	$('#tab_projects').removeClass('active');
	$('#tab_hackathons').removeClass('active');
	$('#tab_jobs').removeClass('active');
	$('#tab_ideologies').removeClass('active');
	$('#tab_contact').removeClass('active');
	$('#tab_languages').removeClass('active');
	$('#tab_skills').addClass('active');
	original = language;
	language = language.toLowerCase()

	if(language !== "all"){
		$("#projectlist").empty()
		console.log($('#projectlist'))
	}else{
		$("#projectlist").empty()
		$(skills).each(function(index){
			CreateProjectCardskills(index,skills[index].title,skills[index].position,skills[index].role,skills[index].description,skills[index].images,skills[index].skills,skills[index].github,skills[index].other,skills[index].date)
		})		
	}

	$(skills).each(function(index){
		if (language !== "all"){
			if (language == "web development" || language == "game development" || language == "software development" || language == "server development"){
				$(skills[index].role).each(function(i){
					if(skills[index].role[i] == language){
						CreateProjectCardskills(index,skills[index].title,skills[index].position,skills[index].role,skills[index].description,skills[index].images,skills[index].skills,skills[index].github,skills[index].other,skills[index].date)	
					}
				})
			}else{
				$(skills[index].position).each(function(i){
					if(skills[index].position[i] == language){
						CreateProjectCardskills(index,skills[index].title,skills[index].position,skills[index].role,skills[index].description,skills[index].images,skills[index].skills,skills[index].github,skills[index].other,skills[index].date)	
					}
				})
			} // end of is role?
		}
	});

	if(document.getElementById("projectlist").innerHTML == ""){
		if(DeveleopmentMode == true){console.log("InnerHTML = '' ")}
		cont = document.createElement("div")
		$(cont).addClass("container col-12")

		alert = document.createElement("div");
		$(alert).addClass("alert alert-dismissible alert-info");
		alert.style = "text-align:center; font-size:36px; font-weight:bold; "
		alert.innerHTML = "No skills were found..."

		cont.appendChild(alert)
		document.getElementById("projectlist").appendChild(cont)
	}

	document.getElementById("category").innerHTML = original + " skills" 

}

// CreateProjectCardskills(index,skills[index].title,skills[index].position,skills[index].role,skills[index].description,skills[index].images,skills[index].skills,skills[index].github,skills[index].other,skills[index].date)	

function CreateProjectCardskills(index,title,position,role,description,images,skills,github,other,date){
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
	cardtitle.innerHTML = ""
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
			if(DeveleopmentMode == true){console.log("IRAN " + index )}
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
			if(DevelopmentMode == true){console.log("IRAN " + index )}
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