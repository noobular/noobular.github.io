
function listSponsors(){
    // Run through every index of the mentors json, and do this function for every listed index
    $(sponsors).each(function(index){
        var body = document.createElement("div");
        var card = document.createElement("div");
        var card_body = document.createElement("div");  
        var a = document.createElement("a");
        var image = document.createElement("img");

        $(body).addClass("col-12 col-sm-12 col-md-12 col-lg-4");
        switch(sponsors[index].theme){
            case "light":
                $(card).addClass("card");        
                break;
            case "dark":
                $(card).addClass("card secondary-color");
                break;
            default:
                $(card).addClass("card");        

        }
        
        $(card_body).addClass("card-body");

        //card.style = "height:68px;";
        body.style = "margin-bottom:10px;";
        image.style="width:100%";


        a.setAttribute("href",sponsors[index].url);
        a.setAttribute("target","BLANK");
        image.setAttribute("src","images/sponsors/"+sponsors[index].image_name);
        
        $(body).append(a); // put the a in the body
        $(a).append(card); // put the card inside the a
        $(card).append(card_body); // put the body inside of the card
        $(card_body).append(image); //Put the image inside the body

        $("#sponsorlist").append(body); // put the body on the page
    })
}


// Run order
listSponsors();