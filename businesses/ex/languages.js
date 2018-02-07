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

var language=[];

function createSections(){
	$(languages).each(function(index){
		language[index] = document.createElement("a")
		language[index].href = "#"
		language[index].innerHTML = languages[index]
		document.getElementById("style-6").appendChild(language[index])
	});
}

createSections();
