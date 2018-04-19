function GenerateProjects(language){
	$('#tab_projects').addClass('active');
	$('#tab_skills').removeClass('active');
	$('#tab_hackathons').removeClass('active');
	$('#tab_ethics').removeClass('active');
	$('#tab_contact').removeClass('active');
	$('#tab_languages').removeClass('active');
	$('#tab_jobs').removeClass('active');
	EditJumbotron("Projects","All of my past projects I've worked on for classes and hobby projects.")
	original = language;
	language = language.toLowerCase()

	if(language !== "all"){
		$("#projectlist").empty()
		if(DevelopmentMode==true){console.log($('#projectlist'))}
	}else{
		$("#projectlist").empty()
		$(projects).each(function(index){
			CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other)
		})		
	}

	$(projects).each(function(index){
		if (language !== "all"){
			if (language == "web development" || language == "game development" || language == "software development" || language == "server development" || language == "app development"){
				$(projects[index].role).each(function(i){
					if(projects[index].role[i].toLowerCase() == language){
						CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other)	
					}
				})
			}else{
				$(projects[index].languages).each(function(i){
					if(projects[index].languages[i].toLowerCase() == language){
						CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other)	
					}
				})
			} // end of is role?
		}
	});

	if(document.getElementById("projectlist").innerHTML == ""){
		if(DevelopmentMode==true){console.log("InnerHTML = '' ")}
		cont = document.createElement("div")
		$(cont).addClass("container col-12")

		alert = document.createElement("div");
		$(alert).addClass("alert alert-dismissible alert-info");
		alert.style = "text-align:center; font-size:36px; font-weight:bold; "
		alert.innerHTML = "No projects were found..."

		cont.appendChild(alert)
		document.getElementById("projectlist").appendChild(cont)
	}

	document.getElementById("category").innerHTML = original + " projects" 

}

// CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other,projects[index].date)	

function CreateProjectCard(index,title,languages,role,description,images,skills,github,other){
	carouselid = "carousel"+index;

	// Element Creation
	container = document.createElement("div")
		card = document.createElement("div")
			cardheader = document.createElement("h3")
			cardbody = document.createElement("div")
				cardtitle = document.createElement("h5")
				cardsubtitle = document.createElement("h6")

			carousel = document.createElement("div")
			$(carousel).attr("style","padding:0px")
				carouselinner = document.createElement("div")
				
				carouselcontrolprev = document.createElement("a")
					carouselcontrolprevimg = document.createElement("span")
				carouselcontrolnext = document.createElement("a")
					carouselcontrolnextimg = document.createElement("span")

			cardbody2 = document.createElement("div")
				descriptiontext = document.createElement("span")
				descriptiontext.innerHTML = "<b>Description</b>"
				$(descriptiontext).addClass("nopadding")
				cardbody2.appendChild(descriptiontext)

				cardtext = document.createElement("p")
				listcontainer = document.createElement("ul")
				cardbody3 = document.createElement("div")
				$(cardbody3).attr("style","padding:0px;margin:0px;")
				cardfooter = document.createElement("div") 

	// Element Class Change
	$(container).addClass("col-xs-12 col-sm-12 col-md-4 col-lg-3")
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
	$(cardbody2).addClass("card-body nopadding")
	$(cardtext).addClass("card-text")
	$(listcontainer).addClass("list-group list-group-flush")
	$(cardfooter).addClass("card-footer text-muted")



	$(cardbody3).attr("style","padding:15px; padding-bottom:0px; font-size:20px")


	tags = document.createElement('i')
	tags.id = "tags" + index;
	$(tags).addClass("fas fa-tags")
	$(tags).attr("title","Tags\n" + languages.join(", ") + "\n" + role.join(", "))
	$(tags).attr("data-toggle","tooltip")
	$(tags).attr("data-placement","bottom")
	$(tags).attr("style","margin-right:10px;")
	cardfooter.appendChild(tags)

	photobtn = document.createElement('i')
	photobtn.id = "photobtn" + index;
	$(photobtn).addClass("fas fa-images")
	$(photobtn).attr("title","Tags\n" + languages.join(", ") + "\n" + role.join(", "))
	$(photobtn).attr("data-toggle","tooltip")
	$(photobtn).attr("data-placement","bottom")
	cardfooter.appendChild(photobtn)

	// Element ID Change
	$(carousel).attr("id",carouselid);

	// Element Text Change

	cardheader.innerHTML = title
	cardtitle.innerHTML = "Tags"
	cardsubtitle.innerHTML = languages.join(", ") + "<br>" + role.join(", ")
	cardtext.innerHTML = description

	// Attribute Changes
	$(carousel).attr("data-ride","carousel")
	$(carousel).attr("data-interval","false")
	$(carouselcontrolnext).attr("data-slide","next")
	$(carouselcontrolprev).attr("data-slide","prev")
	$(carouselcontrolnext).attr("href","#"+carouselid)
	$(carouselcontrolprev).attr("href","#"+carouselid)

	$(card).attr("style","height:700px;")


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
			if(DevelopmentMode==true){console.log("IRAN " + index )}
			items[index] = document.createElement("div") // Carouselitems
			imgs[index] = document.createElement("img")  // carouselimgs
			if(index == 0){
				$(items[index]).addClass("carousel-item active")
			}else{
				$(items[index]).addClass("carousel-item")
			}
			$(imgs[index]).addClass("carouselimg cover scaleimg") //effectfront
			$(imgs[index]).attr("src",images[index])
			$(imgs[index]).attr("alt","img"+carouselid+index)
			items[index].appendChild(imgs[index]);
			carouselinner.appendChild(items[index])
		});

		skill = []
		$(skills).each(function(index){ 
			if(DevelopmentMode==true){console.log("IRAN " + index )}
			skill[index] = document.createElement("a")  // skill text
			$(skill[index]).addClass("list-group-item nopadding")
			skill[index].innerHTML = "<b>Benefit " + (index + 1) + "</b><br>" + skills[index]
			listcontainer.appendChild(skill[index])
		});

	//Actual Main Object Appending
	container.appendChild(card)
		card.appendChild(cardheader)
		//card.appendChild(cardbody)
		card.appendChild(carousel)
		if(cardbody3.innerHTML !== ""){
			card.appendChild(cardbody3)
		}
		card.appendChild(cardbody2)
		card.appendChild(listcontainer)

		card.appendChild(cardfooter)

	document.getElementById("projectlist").appendChild(container)
	count++;
}

currentSearch = document.getElementById("langsearch").innerHTML


GenerateProjects("All");
EditJumbotron("Hello, world!","This is a indepth look at my programming background / projects I've created.")