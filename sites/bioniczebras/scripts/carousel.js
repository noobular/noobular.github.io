/*
<div class="carousel-item active">
    <img src="images/showcase/buildseason2018.jpg" alt="Los Angeles">
    <div class="carousel-caption">
        <h3>End of build season 2018!</h3>
        <p>We had such a great time!</p>
    </div>   
</div>
*/

// Checks to see if there is more than a single image, if not remove the carousel controls.
if(images.length==1){
    $('#carouselcontrols1').remove();
    $('#carouselcontrols2').remove();
}

// Go through each index in the images json array, do this function based on the data.
$(images).each(function(index){
    var item = document.createElement('div');
    if(index == 0){
        $(item).addClass("carousel-item active");    
    }else{
        $(item).addClass("carousel-item");
    }

    var image = document.createElement('img');
    $(image).attr("src","images/showcase/"+images[index].name);
    $(image).attr("alt",images[index].name.split('.')[0]);
    
    var caption = document.createElement('div');
    $(caption).addClass('carousel-caption');

    var captionh3 = document.createElement('h3');
    captionh3.style = "color:white; font-size:18px;"
    captionh3.innerHTML = images[index].header;

    var captionp = document.createElement('p');
    captionp.innerHTML = images[index].caption;

    // Appends the different elements together to form the top template
    $(item).append(image);
    $(caption).append(captionh3)
    $(caption).append(captionp)
    $(item).append(caption)

    // takes that finished element and appends it to the carousel
    $('#imageCarousel').append(item);
});

