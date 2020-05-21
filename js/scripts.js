//Nav
  function menuToggle() {
    var nav = document.getElementById('menu-overlay');
    nav.classList.toggle('active');
    var nav = document.getElementById('toggleIcon');
    nav.classList.toggle('active');
  }

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

  //Contact Form
  $(document).ready(function(){
    $("#contact-form").on("submit",function(e){
      e.preventDefault();
      if($("#contact-form [name='first_name']").val() === '') {
        $("#contact-form [name='first_name']").css("border","1px solid red");
      }else if($("#contact-form [name='last_name']").val() === '') {
        $("#contact-form [name='last_name']").css("border","1px solid red");
      }else if ($("#contact-form [name='your_email']").val() === '') {
        $("#contact-form [name='your_email']").css("border","1px solid red");
      } else {
        $("#loading-img").css("display","block");
        var sendData = $( this ).serialize();
        $.ajax({
          type: "POST",
          url: "get_response.php",
          data: sendData,
          success: function(data){
          $("#loading-img").css("display","none");
          $(".response_msg").text(data);
          $(".response_msg").slideDown();
          $("#contact-form").find("input[type=text], input[type=email], textarea").val("");
          }
        });
      }
    });

    $("#contact-form input").blur(function(){
    var checkValue = $(this).val();
    if(checkValue != '') {
      $(this).css("border","1px solid #eeeeee");
    }
  });
});
