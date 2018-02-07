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
		"language": "LUA",
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
		"language": "LUA",
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
		"language": "LUA",
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
		"language": "LUA",
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



function GenerateProjects(){
	$(projects).each(function(index){
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
	});

}

function CreateProjectCard(title,language,description,img1,img2,img3,skill1,skill2,skill3,github,other){


}


GenerateProjects();