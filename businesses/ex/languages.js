var languages = [
	"Javascript",
	"Jquery",
	"C++",
	"C#",
	"Lua",
	".Net",
	"MySQL",
	"Python",
	"NodeJS",
	"PHP",
	"Basic",
	"HTML"
]

var element=[];

function createSections(){
	$(languages).each(function(index){
		element[index] = document.createElement("a")
		element[index].href = "#"
		element[index].innerHTML = languages[index]
		element[index].setAttribute("onclick","GenerateProjects('"+languages[index]+"')")
		document.getElementById("style-6").appendChild(element[index])
	});
}

createSections();
