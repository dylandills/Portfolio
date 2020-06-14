//Header
$(document).ready(function () {
    $('main').css('margin-top', $('header').outerHeight() + 'px');
    //Nav
    function menuToggle() {
      var nav = document.getElementById('menu-overlay');
      nav.classList.toggle('active');
      var nav = document.getElementById('toggleIcon');
      nav.classList.toggle('active');
    }

});

//Highlight on scroll
$('a[href^="#"]').on('click', function(e) {
       e.preventDefault();
       $(document).off("scroll");

       $('a').each(function() {
           $(this).removeClass('active');
       })
       $(this).addClass('active');

       var target = this.hash,
           menu = target;
       $target = $(target);
       $('html, body').stop().animate({
           'scrollTop': $target.offset().top
       }, 700, 'slow', function() {
           window.location.hash = target;
           $(document).on("scroll", onScroll);
       });
   });

   $(window).on("scroll", function() {
       onScroll();
   });

   function onScroll(event) {
       var scrollPos = $(document).scrollTop();
       $('.menu a').each(function() {
           var currLink = $(this);
           var refElement = $(currLink.attr("href"));
           if ((refElement.position().top <= scrollPos + $("header").outerHeight() + 100 && (refElement.position().top + refElement.height()) > scrollPos + $("header").outerHeight() + 100)) {
               $(this).removeClass("active");
               currLink.addClass("active");
           } else {
               currLink.removeClass("active");
           }
           if ($(window).scrollTop() + $(window).height() == $(document).height()) {
               $(this).removeClass("active");
           }
       });
   }

//Bouncing Arrow Scroll
$(window).scroll(function(){
    $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
  //250 is fade pixels
  });

//Contact Form
$(function() {
	// Get the form.
	var form = $('#ajax-contact');
	// Get the messages div.
	var formMessages = $('#form-messages');
	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();
		// Serialize the form data.
		var formData = $(form).serialize();
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			// Set the message text.
			$(formMessages).text(response);
			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});
});
