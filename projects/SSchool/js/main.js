
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('nav').css("top", "0px");
        } else {
            $('nav').css("top", "-100px");
        }
    });

    $('.owl-carousel').owlCarousel();
});
