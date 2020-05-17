//Bouncing Arrow on click
$('#down-arrow').click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1700);
});
//Bouncing Arrow Scroll
$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  //250 is fade pixels
  });
