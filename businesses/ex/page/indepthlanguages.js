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
var languageskills = [
	{
		"title": "HTML",
		"position" : [""],
		"role":[""],
		"description":"HTML on it's own isn't much, but tagged in with CSS and other Frameworks it can create truely beautiful websites and games. I've personally used it on this portfolio website and all other business related sites I've created.",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":[],
		"github":"",
		"other":["",""],
		"date":""
	},
	{
		"title": "JavaScript",
		"position" : [""],
		"role":[""],
		"description":"JavaScript is a beautiful language that runs within your web browser allowing more sophisticated logic within your website. I've used JavaScript within my Mini Text Adventure Game to allow more functionality and smarter functionality compared to no functionality other then moving pages.",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":[["JavaScript Comments Video","http://www.screencast.com/t/uqNlTE1kd"],["JavaScript Code Challenge Video","http://www.screencast.com/t/iN43KsmHkv"]],
		"github":"",
		"other":["",""],
		"date":""
	},
	{
		"title": "GameMakerLanguage",
		"position" : [""],
		"role":[""],
		"description":"GameMakerLanguage or GML is very similar to how JavaScript works in terms of syntax which allows new programmers to ease into using it for the start of designing games. I've used GML in the creation of some of my personal games like \"Garbage\" and \"Drunken Puppy Rescue - Winter Ops\" within gamemaker 8.1 to create many things and functionality like healthbars rotating objects that will allow for a more realistic feel to the player.",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":[["GML Collisions Video","http://www.screencast.com/t/Nx83iB6gkXj2"],["GML Movement Video","http://www.screencast.com/t/khwHPtF4"],["GML Parenting Video","http://www.screencast.com/t/eeMOov6F"],["GML Sprite Animation Video","http://www.screencast.com/t/LkbJAGBx"]],
		"github":"",
		"other":["",""],
		"date":""
	}
]

function Generatelanguages(language){
	$('#tab_projects').removeClass('active');
	$('#tab_hackathons').removeClass('active');
	$('#tab_jobs').removeClass('active');
	$('#tab_ideologies').removeClass('active');
	$('#tab_contact').removeClass('active');
	$('#tab_skills').removeClass('active');
	$('#tab_languages').addClass('active');
	EditJumbotron("Indepth with Languages","This section is just a brief description of each language and it's possible perks.")
	original = language;
	language = language.toLowerCase()

	if(language !== "all"){
		$("#projectlist").empty()
		console.log($('#projectlist'))
	}else{
		$("#projectlist").empty()
		$(languageskills).each(function(index){
			CreateProjectCardindepthlanguages(index,languageskills[index].title,languageskills[index].position,languageskills[index].role,languageskills[index].description,languageskills[index].images,languageskills[index].skills,languageskills[index].github,languageskills[index].other,languageskills[index].date)
		})		
	}

	$(languageskills).each(function(index){
		if (language !== "all"){
			if (language == "web development" || language == "game development" || language == "software development" || language == "server development"){
				$(languageskills[index].role).each(function(i){
					if(languageskills[index].role[i] == language){
						CreateProjectCardindepthlanguages(index,languageskills[index].title,languageskills[index].position,languageskills[index].role,languageskills[index].description,languageskills[index].images,languageskills[index].skills,languageskills[index].github,languageskills[index].other,languageskills[index].date)	
					}
				})
			}else{
				$(languageskills[index].position).each(function(i){
					if(languageskills[index].position[i] == language){
						CreateProjectCardindepthlanguages(index,languageskills[index].title,languageskills[index].position,languageskills[index].role,languageskills[index].description,languageskills[index].images,languageskills[index].skills,languageskills[index].github,languageskills[index].other,languageskills[index].date)	
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
		alert.innerHTML = "No languageskills were found..."

		cont.appendChild(alert)
		document.getElementById("projectlist").appendChild(cont)
	}

	document.getElementById("category").innerHTML = original + " languages" 

}

// CreateProjectCardindepthlanguages(index,languageskills[index].title,languageskills[index].position,languageskills[index].role,languageskills[index].description,languageskills[index].images,languageskills[index].skills,languageskills[index].github,languageskills[index].other,languageskills[index].date)	

function CreateProjectCardindepthlanguages(index,title,position,role,description,images,skills,github,other,date){
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
	cardtitle.innerHTML = position[0]
	cardsubtitle.innerHTML = role.join(", ")
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
			if(DevelopmentMode == true){console.log("IRAN " + index )}
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
			$(skill[index]).attr("target","_blank")
			$(skill[index]).addClass("list-group-item")
			skill[index].innerHTML = skills[index][0]
			$(skill[index]).attr("href",skills[index][1])
			listcontainer.appendChild(skill[index])
		});

	//Actual Main Object Appending
	container.appendChild(card)
		card.appendChild(cardheader)
		if(cardtitle.length > 0 || cardsubtitle.length > 0){
			card.appendChild(cardbody)
		}
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