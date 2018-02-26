/*
	EXAMPLE PROJECT

	{
		"title": "",
		"languages": [""],
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
var projects = [
	{
		"title": "Garry's Mod Addons",
		"languages": ["Lua"],
		"role":["Game Development","Software Development"],
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":["More hands on work with LUA and creation automation.","Exposure in the community, gaining a larger audience for future addons."],
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":["",""],
		"date":"February 1, 2018",
		"badge":["","",""] // print text, type, tooltip text
	},
	{
		"title": "Portfolio",
		"languages": ["HTML","JQuery","Javascript"],
		"role":["Web Development"],
		"description":"The purpose of the portfolio was to get my skills and past experience out to possible employers. ",
		"images": ["img/projects/website/jumbotron.png"],
		"skills":["Increased Viewership"," Potentially created partnerships / business deals."," Potentially created partnerships / business deals."],
		"github":"https://github.com/noobularkid/noobularkid.github.io",
		"other":["",""],
		"date":"2015 - Current",
		"badge":["","",""] // print text, type, tooltip text
	},
	{
		"title": "Pastebin Post",
		"languages": ["Misc"],
		"role":[""],
		"description":"description",
		"images": ["img/projects/pastebin/paste.png"],
		"skills": ["Challenged myself to create new things","Shows another technique to possibly increase productivity within a team.","Another place to post scripts."],
		"github":"",
		"other":["Pastebin","https://pastebin.com/u/Noobular"],
		"date":"March 30th, 2015 - 2017",
		"badge":["","",""] // print text, type, tooltip text
	},
	{
		"title": "Mini Text Adventure Game",
		"languages": ["HTML","Javascript","JQuery","Bootstrap"],
		"role":["Web Development"],
		"description":"Text adventure game, using HTML / CSS / JavaScript / JQuery where you can level up, attack different creatures, obtain randomized items and gold, travel, and finally complete quest.",
		"images": ["img/projects/mtag/inventory.png","img/projects/mtag/name.png","img/projects/mtag/stats.png"],
		"skills": ["Created a new experience for me, creating a web browser based game.","It made me think creatively in ways to take user input, versus a normal text adventure game."],
		"github":"",
		"other":["",""],
		"date":"February 8, 2017",
		"badge":["","",""] // print text, type, tooltip text
	},
	{
		"title": "Website Generator",
		"languages": ["C#"],
		"role":["Software Development"],
		"description":"A tool allowing for the automated creation of website files, with ability to add certain frameworks with a toggle switch.",
		"images": ["img/projects/htmlfilecreator/blank.png","img/projects/htmlfilecreator/filled.png"],
		"skills": ["Allowed me to have a purpose for C# in a project.","It allowed me to created a new faster way to create new pages, without needing to look for the framework CDNs."],
		"github":"",
		"other":["",""],
		"date":"Unknown Creation Date",
		"badge":["","",""] // print text, type, tooltip text
	},
	{
		"title": "Garbage",
		"languages": ["Game Maker Language", "Joke"],
		"role":["Game Development"],
		"description":"\"Garbage\" is a game where you're in a lab and you've some mistakes in your calculations and you created infinitely spawning creatures that are... ever so sadly trying to kill you, It's your job to clean your mess up and destroy them by throwing an infinite number of potions that will kill them. ",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": ["Gave me a new experience, for the first time working with a team on the same game.","It made me think creatively in ways to take user input, versus a normal text adventure game.","It put me in a position to start figuring out problems and ideas with gamemaker while getting input from a team of people."],
		"github":"",
		"other":["",""],
		"date":"June, 2017",
		"badge":["","",""] // print text, type, tooltip text
	},
	{
		"title": "Zool",
		"languages": ["Game Maker Language"],
		"role":["Game Development"],
		"description":"Zool is a game and a character where you gain points by killing enemies and collecting sweets to defend the candy world. ",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": ["It made me create a new type of game, I hadn't in the past. (Platformer)"],
		"github":"",
		"other":["",""],
		"date":"June, 2017",
		"badge":["","",""] // print text, type, tooltip text
	},
	{
		"title": "Drunken Puppy Rescue - Winter Ops",
		"languages": ["Game Maker Language", "Joke"],
		"role":["Game Development"],
		"description":"You've got to collect puppies, while angry men chase you trying to steal your alcohol, but you can also beat them with your alcohol to collect more without being damaged. ",
		"images": ["img/projects/drunkwinter/alcohol.png","img/projects/drunkwinter/lepo.png","img/projects/drunkwinter/mono.png"],
		"skills": ["It made me think creatively in ways to create shooting mechanics","It put me in a position to start figuring out problems and ideas with gamemaker while getting input from a team of absent people."],
		"github":"",
		"other":["",""],
		"date":"June, 2017",
		"badge":["","",""] // print text, type, tooltip text
	},
	{
		"title": "Drunken Puppy Rescue - Winter Ops",
		"languages": ["Game Maker Language", "Joke"],
		"role":["Game Development"],
		"description":"You've got to collect puppies, while angry men chase you trying to steal your alcohol, but you can also beat them with your alcohol to collect more without being damaged. ",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills": ["It made me think creatively in ways to create shooting mechanics","It put me in a position to start figuring out problems and ideas with gamemaker while getting input from a team of absent people."],
		"github":"",
		"other":["",""],
		"date":"June, 2017",
		"badge":["","",""] // print text, type, tooltip text
	},
	{
		"title": "Livecode",
		"languages": ["Livecode"],
		"role":["App Development"],
		"description":"random test",
		"images": ["https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200","https://picsum.photos/300/200"],
		"skills":["More hands on work with Livecode and App development."],
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":["",""],
		"date":"February 1, 2018",
		"badge":["","",""] // print text, type, tooltip text
	}
]

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
			CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other,projects[index].date)
		})		
	}

	$(projects).each(function(index){
		if (language !== "all"){
			if (language == "web development" || language == "game development" || language == "software development" || language == "server development" || language == "app development"){
				$(projects[index].role).each(function(i){
					if(projects[index].role[i].toLowerCase() == language){
						CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other,projects[index].date)	
					}
				})
			}else{
				$(projects[index].languages).each(function(i){
					if(projects[index].languages[i].toLowerCase() == language){
						CreateProjectCard(index,projects[index].title,projects[index].languages,projects[index].role,projects[index].description,projects[index].images,projects[index].skills,projects[index].github,projects[index].other,projects[index].date)	
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
	cardtitle.innerHTML = "Tags"
	cardsubtitle.innerHTML = languages.join(", ") + "<br>" + role.join(", ")
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
			if(DevelopmentMode==true){console.log("IRAN " + index )}
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
			if(DevelopmentMode==true){console.log("IRAN " + index )}
			skill[index] = document.createElement("a")  // skill text

			$(skill[index]).addClass("list-group-item")

			skill[index].innerHTML = "<b>Benefit " + (index + 1) + "</b><br>" + skills[index]

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


GenerateProjects("All");