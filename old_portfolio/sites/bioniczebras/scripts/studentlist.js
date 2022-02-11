
function listStudents(){
    // Run through every index of the mentors json, and do this function for every listed index
    $(students).each(function(index){
        var element = document.createElement("li");
        var badge = document.createElement("span");
        var studentname = document.createElement("span")

        $(element).addClass("nav-item");
        $(badge).addClass("badge badge-primary")

        element.style = "margin-left:10px; margin-right:0px; padding-right:0px;"
        badge.style ="float:right;"
        studentname.style=""

        studentname.innerHTML = students[index].name;
        badge.innerHTML = students[index].role;

        $(element).append(badge);
        $(element).append(studentname);
       // $("#studentlist").append(badge);
        $("#studentlist").append(element);
    })
}




// Run order
listStudents();