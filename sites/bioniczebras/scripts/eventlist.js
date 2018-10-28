function listEvents(){
    // Run through every index of the mentors json, and do this function for every listed index
    $(events).each(function(index){
        var element = document.createElement("li");
        var badge = document.createElement("span");
        var eventname = document.createElement("span")

        $(element).addClass("nav-item");
        $(badge).addClass("badge badge-primary")

        element.style = "margin-left:10px;"
        badge.style ="float:left;"
        eventname.style="float:left;"

        eventname.innerHTML = events[index].name;
        badge.innerHTML = events[index].date;

        $(element).append(badge);
        $(element).append(eventname);
       // $("#studentlist").append(badge);
        $("#eventlist").append(element);
    })
}




// Run order
listEvents();