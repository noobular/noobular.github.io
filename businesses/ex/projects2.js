/*
	EXAMPLE PROJECT

	{
		"title": "",
		"languages": [""],
		"role":"",
		"description":"",
		
		"github":"",
		"other":"",
	},
*/
var count;
var projects = [
	{
		"title": "Garry's Mod Addons",
		"languages": ["Lua", "HTML"],
		"role":["Game Development","Software Development"],
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":["More hands on work with LUA and creation automation.","Exposure in the community, gaining a larger audience for future addons."],
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":"#",
		"date":"February 7, 2018"
	},
	{
		"title": "Experience Portfolio",
		"languages": ["HTML"],
		"role":["Web Development"],
		"description":"Basic Description",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":["Increased Viewership"," Potentially created partnerships / business deals."," Potentially created partnerships / business deals."],
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":"#",
		"date":"February 7, 2018"
	},
	{
		"title": "Pastebin Post",
		"languages": ["Misc"],
		"role":[""],
		"description":"description",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": ["Challenged myself to create new things","Shows another technique to possibly increase productivity within a team.","Another place to post scripts."],
		"github":"https://github.com/noobularkid",
		"other":"#",
		"date":"February 7, 2018"
	},
	{
		"title": "Web page generator",
		"languages": ["C#"],
		"role":["Software Development"],
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": ["The ability to create structured files in the programming language \"LUA\". ","More hands on work with LUA and creation automation.","Exposure in the community, gaining a larger audience for future addons."],
		"github":"https://github.com/noobularkid/",
		"other":"#",
		"date":"February 7, 2018"
	},
	{
		"title": "Mini Text Adventure Game",
		"languages": ["Javascript"],
		"role":["Web Development"],
		"description":"Class Requirement: Game Design and Programming, The playable version, is the website link below.",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": ["Created a new experience for me, creating a web browser based game.","It made me think creatively in ways to take user input, versus a normal text adventure game."],
		"github":"",
		"other":"",
		"date":"February 7, 2018"
	},
	{
		"title": "HTML File Creator",
		"languages": ["C#"],
		"role":["Software Development"],
		"description":"",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": [],
		"github":"",
		"other":"",
		"date":"February 7, 2018"
	},
	{
		"title": "Garbage",
		"languages": ["Game Maker Language"],
		"role":["Game Development"],
		"description":"",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": [],
		"github":"",
		"other":"",
		"date":"February 7, 2018"
	},
	{
		"title": "Zool",
		"languages": ["Game Maker Language"],
		"role":["Game Development"],
		"description":"",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": [],
		"github":"",
		"other":"",
		"date":"February 7, 2018"
	},
	{
		"title": "Drunken Puppy Rescue - Winter Ops",
		"languages": ["Game Maker Language"],
		"role":["Game Development"],
		"description":"",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": [],
		"github":"",
		"other":"",
		"date":"February 7, 2018"
	}
]

function GenerateProjects(language){
	if(language !== "All"){
		$("#projectlist").empty()
		console.log($('#projectlist'))
	}else{
		$("#projectlist").empty()
		$(projects).each(function(index){
			CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other,projects[index].date)
		})		
	}

	$(projects).each(function(index){
		if (language !== "All"){
			if (language == "Web Development" || language == "Game Development" || language == "Software Development" || language == "Server Development"){
				$(projects[index].role).each(function(i){
					if(projects[index].role[i] == language){
						CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other,projects[index].date)	
					}
				})
			}else{
				$(projects[index].languages).each(function(i){
					if(projects[index].languages[i] == language){
						CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other,projects[index].date)	
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
		alert.innerHTML = "No projects were found..."

		cont.appendChild(alert)
		document.getElementById("projectlist").appendChild(cont)
	}

	document.getElementById("category").innerHTML = "<u>" +  language + "</u>"

}

// CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other,projects[index].date)	

function CreateProjectCard(index,title,languages,role,description,images,skills,github,other,date){
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
				githube = document.createElement("a")
				othere = document.createElement("a")
				cardfooter = document.createElement("div") 

	// Element Class Change
	$(container).addClass("col-3")
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
	$(githube).addClass("card-link")
	$(othere).addClass("card-link")
	$(cardbody3).addClass("card-body")
	$(cardfooter).addClass("card-footer text-muted")




	// Element ID Change
	$(carousel).attr("id",carouselid);

	// Element Text Change

	cardheader.innerHTML = title
	cardtitle.innerHTML = "Tags"
	cardsubtitle.innerHTML = role.join(", ") + "<br>" + languages.join(", ")
	cardtext.innerHTML = description
	githube.innerHTML = "Github Link"
	othere.innerHTML = "Something Else..."
	cardfooter.innerHTML = date

	// Attribute Changes
	$(carousel).attr("data-ride","carousel")
	$(carouselcontrolnext).attr("data-slide","next")
	$(carouselcontrolprev).attr("data-slide","prev")
	$(carouselcontrolnext).attr("href","#"+carouselid)
	$(carouselcontrolprev).attr("href","#"+carouselid)
	$(githube).attr("href",github)
	$(othere).attr("href",other)


	// Embeding Elements
	cardbody.appendChild(cardtitle)
	cardbody.appendChild(cardsubtitle)

	carousel.appendChild(carouselinner)
	carouselcontrolprev.appendChild(carouselcontrolprevimg)
	carouselcontrolnext.appendChild(carouselcontrolnextimg)
	carousel.appendChild(carouselcontrolprev)
	carousel.appendChild(carouselcontrolnext)

	cardbody2.appendChild(cardtext)

	cardbody3.appendChild(githube)
	cardbody3.appendChild(othere)

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

			skill[index].innerHTML = skills[index]

			listcontainer.appendChild(skill[index])
		});

	//Actual Main Object Appending
	container.appendChild(card)
		card.appendChild(cardheader)
		card.appendChild(cardbody)
		card.appendChild(carousel)
		card.appendChild(cardbody2)
		card.appendChild(listcontainer)
		card.appendChild(cardbody3)
		card.appendChild(cardfooter)

	document.getElementById("projectlist").appendChild(container)
	count++;
}

currentSearch = document.getElementById("langsearch").innerHTML


GenerateProjects("All");