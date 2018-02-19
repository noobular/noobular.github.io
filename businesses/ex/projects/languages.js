var languages = [
	"HTML",
	"Javascript",
	"JQuery",
	"Bootstrap",
	"MySQL",
	"PHP",
	"C++",
	"C#",
	"Lua",
	".Net",
	"Python",
	"NodeJS",
	"Basic",
	"Game Maker Language",
	"Joke"
]

var roles =[
	"All",
	"Web Development",
	"Game Development",
	"Software Development",
	"Server Development",
	"App Development"
]

var element=[], elementa=[];

function createSections(language){
		$(roles).each(function(index){
			element[index] = document.createElement("li")
			elementa[index] = document.createElement("a")
			elementa[index].href = "#"
			elementa[index].innerHTML = roles[index]
			elementa[index].setAttribute("onclick","GenerateProjects('"+roles[index]+"')")
			elementa[index].style ="font-size:18px;"

			element[index].appendChild(elementa[index])
			document.getElementById("languagelist").appendChild(element[index])
		});

		$(languages).each(function(index){
			element[index] = document.createElement("li")
			elementa[index] = document.createElement("a")
			elementa[index].href = "#"
			elementa[index].innerHTML = languages[index]
			elementa[index].setAttribute("onclick","GenerateProjects('"+languages[index]+"')")
			elementa[index].style ="font-size:18px;"
			element[index].appendChild(elementa[index]);

			document.getElementById("languagelist").appendChild(element[index])
		});
}

function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('langsearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById('languagelist');
    li = ul.getElementsByTagName('li');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}

createSections("all");
