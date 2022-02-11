
function listMentors(){
    // Run through every index of the mentors json, and do this function for every listed index
    $(mentors).each(function(index){
        var element = document.createElement("li");
        $(element).addClass("nav-item");
        element.style = "margin-left:10px;"
        element.innerHTML = mentors[index].name;
        $("#mentorlist").append(element);
    })
}




// Run order
listMentors();