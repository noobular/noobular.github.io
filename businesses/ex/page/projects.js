function GenerateProjects(language){
	$('#tab_projects').addClass('active');
	$('#tab_skills').removeClass('active');
	$('#tab_hackathons').removeClass('active');
	$('#tab_ideologies').removeClass('active');
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
	$(carouselcontrolnext).attr("data-slide","next")
	$(carouselcontrolprev).attr("data-slide","prev")
	$(carouselcontrolnext).attr("href","#"+carouselid)
	$(carouselcontrolprev).attr("href","#"+carouselid)

	$(card).attr("style","height:700px;")


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
		githube.innerHTML = "<b>Github Link</b>"
		$(githube).attr("href",github)
		$(githube).attr("target","_blank")
		cardbody3.appendChild(githube)

	}

	if(other[0] !== ""){
		othere = document.createElement("a")
		$(othere).addClass("card-link")
		othere.innerHTML = "<b>" + other[0] + "</b>";
		$(othere).attr("href",other[1])
		$(othere).attr("target","_blank")
		cardbody3.appendChild(othere)
	}


	// Automated Element Creation
		//Carousel Item / Image element Creation
		items = [];
		imgs = [];
//onmouseover="this.width='someWidth'; this.height='someHeight'" onmouseout="this.width='originalWidth'; this.height='originalHeight'

		$(images).each(function(index){ 
			if(DevelopmentMode==true){console.log("IRAN " + index )}
			items[index] = document.createElement("div") // Carouselitems
			imgs[index] = document.createElement("img")  // carouselimgs
			if(index == 0){
				$(items[index]).addClass("carousel-item active")
			}else{
				$(items[index]).addClass("carousel-item")
			}

			//$(imgs[index]).attr("onmouseover","this.height='100%'")
			//$(imgs[index]).attr("onmouseout" ,"this.width='200px'; this.height='200px'")

			$(imgs[index]).addClass("carouselimg cover") //effectfront

			$(imgs[index]).attr("src",images[index])

			$(imgs[index]).attr("alt","img"+carouselid+index)

			items[index].appendChild(imgs[index]);
			carouselinner.appendChild(items[index])
		});

		skill = []
		$(skills).each(function(index){ 
			if(DevelopmentMode==true){console.log("IRAN " + index )}
			skill[index] = document.createElement("a")  // skill text

			$(skill[index]).addClass("list-group-item")

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