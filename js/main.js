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