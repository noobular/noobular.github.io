/*
	EXAMPLE PROJECT

	{
		"title": "",
		"language": "",
		"description":"",
		"img1":"",
		"img2":"",
		"img3":"",
		"skill1":"",
		"skill2":"",
		"skill3":"",
		"github":"",
		"other":"",
	},
*/

var projects = [
	{
		"title": "Garry's Mod Addons",
		"language": "Lua",
		"role":"Game Development",
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"img1":"https://picsum.photos/300/200",
		"img2":"https://picsum.photos/300/200",
		"img3":"https://picsum.photos/300/200",
		"skill1":"The ability to create structured files in the programming language \"LUA\". ",
		"skill2":"More hands on work with LUA and creation automation.",
		"skill3":"Exposure in the community, gaining a larger audience for future addons.",
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":"#",
		"date":"February 7, 2018"
	},
	{
		"title": "Experience Portfolio",
		"language": "HTML",
		"role":"Web Development",
		"description":"Basic Description",
		"img1":"https://picsum.photos/300/200",
		"img2":"https://picsum.photos/300/200",
		"img3":"https://picsum.photos/300/200",
		"skill1":"Increased Viewership",
		"skill2":" Visually shown some skills with HTML, CSS, and bootstrap.",
		"skill3":" Potentially created partnerships / business deals.",
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":"#",
		"date":"February 7, 2018"
	},
	{
		"title": "Pastebin Post",
		"language": "Misc",
		"role":"",
		"description":"description",
		"img1":"https://picsum.photos/300/200",
		"img2":"https://picsum.photos/300/200",
		"img3":"https://picsum.photos/300/200",
		"skill1":"Challenged myself to create new things",
		"skill2":"Shows another technique to possibly increase productivity within a team.",
		"skill3":"Another place to post scripts.",
		"github":"https://github.com/noobularkid",
		"other":"#",
		"date":"February 7, 2018"
	},
	{
		"title": "Web page generator",
		"language": "C#",
		"role":"Software Development",
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"img1":"https://picsum.photos/300/200",
		"img2":"https://picsum.photos/300/200",
		"img3":"https://picsum.photos/300/200",
		"skill1":"The ability to create structured files in the programming language \"LUA\". ",
		"skill2":"More hands on work with LUA and creation automation.",
		"skill3":"Exposure in the community, gaining a larger audience for future addons.",
		"github":"https://github.com/noobularkid/",
		"other":"#",
		"date":"February 7, 2018"
	},
]

function GenerateProjects(language){
	if(language !== "All"){
		$("#test").empty()
	}else{
		$(projects).each(function(index){
			CreateProjectCard(index,projects[index].title,projects[index].language,projects[index].description,projects[index].img1,projects[index].img2,projects[index].img3,projects[index].skill1,projects[index].skill2,projects[index].skill3,projects[index].github,projects[index].other,projects[index].date)
		})		
	}

	$(projects).each(function(index){
		if (language !== "All"){
			if(language == "Web Development" || language == "Game Development" || language == "Software Development" || language == "Server Development"){
				if(language==projects[index].role){
					CreateProjectCard(index,projects[index].title,projects[index].language,projects[index].description,projects[index].img1,projects[index].img2,projects[index].img3,projects[index].skill1,projects[index].skill2,projects[index].skill3,projects[index].github,projects[index].other,projects[index].date)	
				}
			}else{
				if(language == projects[index].language){
					CreateProjectCard(index,projects[index].title,projects[index].language,projects[index].description,projects[index].img1,projects[index].img2,projects[index].img3,projects[index].skill1,projects[index].skill2,projects[index].skill3,projects[index].github,projects[index].other,projects[index].date)
				}
			}

			
		}
	});

}

function CreateProjectCard(index,title,language,description,img1,img2,img3,skill1,skill2,skill3,github,other,date){
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
					carouselitem1 = document.createElement("div")
						carouselimg1 = document.createElement("img")
					carouselitem2 = document.createElement("div")
						carouselimg2 = document.createElement("img")
					carouselitem3 = document.createElement("div")
						carouselimg3 = document.createElement("img")
				
				carouselcontrolprev = document.createElement("a")
					carouselcontrolprevimg = document.createElement("span")
				carouselcontrolnext = document.createElement("a")
					carouselcontrolnextimg = document.createElement("span")

			cardbody2 = document.createElement("div")
				cardtext = document.createElement("p")
				listcontainer = document.createElement("ul")
					listgroupitem1 = document.createElement("li")
					listgroupitem2 = document.createElement("li")
					listgroupitem3 = document.createElement("li")
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
	$(carouselitem1).addClass("carousel-item active")
	$(carouselitem2).addClass("carousel-item")
	$(carouselitem3).addClass("carousel-item")
	$(carouselimg1).addClass("carouselimg")
	$(carouselimg2).addClass("carouselimg")
	$(carouselimg3).addClass("carouselimg")
	$(carouselcontrolprev).addClass("carousel-control-prev")
	$(carouselcontrolnext).addClass("carousel-control-next")
	$(carouselcontrolprevimg).addClass("carousel-control-prev-icon")
	$(carouselcontrolnextimg).addClass("carousel-control-next-icon")
	$(cardbody2).addClass("card-body")
	$(cardtext).addClass("card-text")
	$(listcontainer).addClass("list-group list-group-flush")
	$(listgroupitem1).addClass("list-group-item")
	$(listgroupitem2).addClass("list-group-item")
	$(listgroupitem3).addClass("list-group-item")
	$(githube).addClass("card-link")
	$(othere).addClass("card-link")
	$(cardbody3).addClass("card-body")
	$(cardfooter).addClass("card-footer text-muted")


	// Element ID Change
	$(carousel).attr("id",carouselid);

	// Element Text Change
	cardheader.innerHTML = title
	cardtitle.innerHTML = title
	cardsubtitle.innerHTML = language
	cardtext.innerHTML = description
	listgroupitem1.innerHTML = skill1
	listgroupitem2.innerHTML = skill2
	listgroupitem3.innerHTML = skill3
	githube.innerHTML = "Github Link"
	othere.innerHTML = "Something Else..."
	cardfooter.innerHTML = date

	// Image Changes
	$(carouselimg1).attr("src",img1)
	$(carouselimg2).attr("src",img2)
	$(carouselimg3).attr("src",img3)

	// Attribute Changes
	$(carousel).attr("data-ride","carousel")
	$(carouselcontrolnext).attr("data-slide","next")
	$(carouselcontrolprev).attr("data-slide","prev")
	$(carouselcontrolnext).attr("href","#"+carouselid)
	$(carouselcontrolprev).attr("href","#"+carouselid)
	$(githube).attr("href",github)
	$(othere).attr("href",other)
	$(carouselimg1).attr("alt","img"+carouselid+1)
	$(carouselimg2).attr("alt","img"+carouselid+2)
	$(carouselimg3).attr("alt","img"+carouselid+3)


	// Embeding Elements
	cardbody.appendChild(cardtitle)
	cardbody.appendChild(cardsubtitle)

	carousel.appendChild(carouselinner)
	carouselinner.appendChild(carouselitem1)
	carouselitem1.appendChild(carouselimg1)
	carouselinner.appendChild(carouselitem2)
	carouselitem2.appendChild(carouselimg2)
	carouselinner.appendChild(carouselitem3)
	carouselitem3.appendChild(carouselimg3)
	carouselcontrolprev.appendChild(carouselcontrolprevimg)
	carouselcontrolnext.appendChild(carouselcontrolnextimg)
	carousel.appendChild(carouselcontrolprev)
	carousel.appendChild(carouselcontrolnext)

	cardbody2.appendChild(cardtext)
	listcontainer.appendChild(listgroupitem1)
	listcontainer.appendChild(listgroupitem2)
	listcontainer.appendChild(listgroupitem3)

	cardbody3.appendChild(githube)
	cardbody3.appendChild(othere)

	//Actual Main Object Appending
	container.appendChild(card)
		card.appendChild(cardheader)
		card.appendChild(cardbody)
		card.appendChild(carousel)
		card.appendChild(cardbody2)
		card.appendChild(listcontainer)
		card.appendChild(cardbody3)
		card.appendChild(cardfooter)

	document.getElementById("test").appendChild(container)
}

currentSearch = document.getElementById("langsearch").innerHTML


GenerateProjects("All");