responsiveCarousel = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    690: {
        items: 2
    },
    1020: {
        items: 3
    }

}

$(document).ready(function(){
    
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /*Click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    /*owl-carousel for videos*/
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout:5000,
        dots: false,
        nav: true,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsiveCarousel,
    });
});

//Clickable School button
$("#schoolBtn").on('click', function(){
    $('<a href="http://fing.uach.mx/" target="_blank"></a>')[0].click();
    //window.location = "http://fing.uach.mx/";

});

//Back to top button

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(50);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(50);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 50); //specifies the number of milliseconds it takes to scroll to the specified area
});
   

//Back to top button prototype
/*
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#btn btn-primary').fadeIn();
			} else {
				$('#btn btn-primary').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#btn btn-primary').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400); //specifies the number of milliseconds it takes to scroll to the specified area
			return false;
		});
});

*/