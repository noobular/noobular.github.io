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
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"img1":"",
		"img2":"",
		"img3":"",
		"skill1":"The ability to create structured files in the programming language \"LUA\". ",
		"skill2":"More hands on work with LUA and creation automation.",
		"skill3":"Exposure in the community, gaining a larger audience for future addons.",
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":"#"
	},
	{
		"title": "Portfolio",
		"language": "HTML",
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"img1":"",
		"img2":"",
		"img3":"",
		"skill1":"The ability to create structured files in the programming language \"LUA\". ",
		"skill2":"More hands on work with LUA and creation automation.",
		"skill3":"Exposure in the community, gaining a larger audience for future addons.",
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":"#"
	},
	{
		"title": "Printer Hoppers",
		"language": "Lua",
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"img1":"",
		"img2":"",
		"img3":"",
		"skill1":"The ability to create structured files in the programming language \"LUA\". ",
		"skill2":"More hands on work with LUA and creation automation.",
		"skill3":"Exposure in the community, gaining a larger audience for future addons.",
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":"#"
	},
	{
		"title": "Web page generator",
		"language": "C#",
		"description":"I've created a tool which allows me to automatically create scripts based on a vehicles properties in game, allowing me to convert them to \"Simfphys\" Which is a vehicle modficiation",
		"img1":"",
		"img2":"",
		"img3":"",
		"skill1":"The ability to create structured files in the programming language \"LUA\". ",
		"skill2":"More hands on work with LUA and creation automation.",
		"skill3":"Exposure in the community, gaining a larger audience for future addons.",
		"github":"https://github.com/noobularkid/-NA-Simfphys-Megapack",
		"other":"#"
	},
]

function GenerateProjects(language){
	$(projects).each(function(index){
		if (language !== "any"){
			if(language == projects[index].language){
				console.log(projects[index].title)
				console.log(projects[index].language)
				console.log(projects[index].description)
				//console.log(projects[index].img1)
				//console.log(projects[index].img2)
				//console.log(projects[index].img3)
				console.log(projects[index].skill1)
				console.log(projects[index].skill2)
				console.log(projects[index].skill3)
				console.log(projects[index].github)
				console.log(projects[index].other)
			}

		}else{
			console.log("ANY HAS BEEN SELECTED.")
			console.log(projects[index].title)
			console.log(projects[index].language)
			console.log(projects[index].description)
			//console.log(projects[index].img1)
			//console.log(projects[index].img2)
			//console.log(projects[index].img3)
			console.log(projects[index].skill1)
			console.log(projects[index].skill2)
			console.log(projects[index].skill3)
			console.log(projects[index].github)
			console.log(projects[index].other)
		}
		
	});

}

function CreateProjectCard(title,language,description,img1,img2,img3,skill1,skill2,skill3,github,other){

	// Element Creation
	container = document.createElement("div")
		card = document.createElement("div")
			cardheader = document.createElement("h3")
			cardbody = document.createElement("div")
				cardtitle = document.createElement("h5")
				cardsubtitle = document.createElement("h6")

		carousel = document.createElement("div")
		carouselindicators = document.createElement("ul")

	// Element Class Change
	$(container).addClass("col-3")
	$(card).addClass("card mb-3")
	$(cardheader).addClass("card-header")
	$(cardbody).addClass("card-body")
	$(cardtitle).addClass("card-title")
	$(cardsubtitle).addClass("card-subtitle text-muted")
	$().addClass("")
	$().addClass("")
	$().addClass("")



	// Element Text Change
	cardheader.innerHTML = title
	cardtitle.innerHTML = title
	cardsubtitle.innerHTML = language

	// Embeding Elements
	container.appendChild(card)
	card.appendChild(cardheader)
	card.appendChild(cardbody)
	cardbody.appendChild(cardtitle)
	cardbody.appendChild(cardsubtitle)

	document.getElementById("test").appendChild(container)
}

currentSearch = document.getElementById("langsearch").innerHTML
GenerateProjects("HTML");

CreateProjectCard("Title Boi","Basic English","Description","x","x","x","x","x","x","x","x")