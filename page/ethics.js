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

function Generateethics(language){
	$('#tab_projects').removeClass('active');
	$('#tab_hackathons').removeClass('active');
	$('#tab_jobs').removeClass('active');
	$('#tab_languages').removeClass('active');
	$('#tab_contact').removeClass('active');
	$('#tab_skills').removeClass('active');
	$('#tab_ethics').addClass('active');
	EditJumbotron("ethics","These are a bunch of different topics that I believe should be abided by.")
	original = language;
	language = language.toLowerCase()

	if(language !== "all"){
		$("#projectlist").empty()
		console.log($('#projectlist'))
	}else{
		$("#projectlist").empty()
		$(ethics).each(function(index){
			CreateProjectCardethics(index,ethics[index].title,ethics[index].position,ethics[index].role,ethics[index].description,ethics[index].images,ethics[index].skills,ethics[index].github,ethics[index].other,ethics[index].date)
		})		
	}

	$(ethics).each(function(index){
		if (language !== "all"){
			if (language == "web development" || language == "game development" || language == "software development" || language == "server development"){
				$(ethics[index].role).each(function(i){
					if(ethics[index].role[i] == language){
						CreateProjectCardethics(index,ethics[index].title,ethics[index].position,ethics[index].role,ethics[index].description,ethics[index].images,ethics[index].skills,ethics[index].github,ethics[index].other,ethics[index].date)	
					}
				})
			}else{
				$(ethics[index].position).each(function(i){
					if(ethics[index].position[i] == language){
						CreateProjectCardethics(index,ethics[index].title,ethics[index].position,ethics[index].role,ethics[index].description,ethics[index].images,ethics[index].skills,ethics[index].github,ethics[index].other,ethics[index].date)	
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
		alert.innerHTML = "No ethics were found..."

		cont.appendChild(alert)
		document.getElementById("projectlist").appendChild(cont)
	}

	document.getElementById("category").innerHTML = original + " ethics" 

}

// CreateProjectCardindepthlanguages(index,ethics[index].title,ethics[index].position,ethics[index].role,ethics[index].description,ethics[index].images,ethics[index].skills,ethics[index].github,ethics[index].other,ethics[index].date)	

function CreateProjectCardethics(index,title,position,role,description,images,skills,github,other,date){
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
	if(images.length > 1){
		carouselcontrolprev.appendChild(carouselcontrolprevimg)
		carouselcontrolnext.appendChild(carouselcontrolnextimg)
		carousel.appendChild(carouselcontrolprev)
		carousel.appendChild(carouselcontrolnext)
	}

	cardbody2.appendChild(cardtext)
	if (github !== ""){
		githube = document.createElement("a")
		$(githube).addClass("btn btn-primary btn-sm")
		githube.innerHTML = "More information"
		$(githube).attr("data-target","#"+github)
		$(githube).attr("data-toggle","modal")
		$(githube).attr("role","button")
		$(githube).attr("target","_blank")
		$(githube).attr("style","color:white;")
		cardfooter.appendChild(githube)
	}

	if(other[0] !==""){
		for(i=0;i<other.length;i++){
			othere = document.createElement("a")
			$(othere).addClass("card-link")
			othere.innerHTML = "<b>" + other[i][0] + "</b>";
			$(othere).attr("href",other[i][1])
			$(othere).attr("target","_blank")
			cardbody3.appendChild(othere)
		}
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
			
			$(imgs[index]).addClass("carouselimg definedimg")

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
