
function listAnnouncements(){
    // Run through every index of the mentors json, and do this function for every listed index
    $(announcements).each(function(index){
        var element = document.createElement("li");
        $(element).addClass("nav-item");
        element.style = "margin-left:10px;"
        element.innerHTML = announcements[index].announcement;
        $("#announcementlist").append(element);
    })
}




// Run order
listAnnouncements();
