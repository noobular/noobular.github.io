
function listResources(){
    // Run through every index of the mentors json, and do this function for every listed index
    $(resources).each(function(index){
        var element = document.createElement("a");
        $(element).addClass("nav-item");
        element.style = "margin-left:10px; color:white;"
        element.innerHTML = resources[index].name;
        element.setAttribute("href",resources[index].link)
        $("#resourcelist").append(element);
    })
}




// Run order
listResources();