// Begin with a document ready that will be holding all of the js
$(document).ready(function () {

    // Attach an event listener onto the icon element in the header, and on click, toggle between having the vertical menu visible and not visible, as well as between having the hamburger icon visible and the x icon visible. 
    $('i.move').on('click', function () {
        $('.hamburger-menu nav').toggleClass('navVisible')
        $('i.move').toggleClass('fa fa-bars fas fa-times')
    })

    $('i').on('keydown', function (e) {
        if (e.key == 'Enter') {
            $('.hamburger-menu nav').toggleClass('navVisible')
            $('i.move').toggleClass('fa fa-bars fas fa-times')
        }
    })

    const scroll = function(scrollTo){
        $('html, body').animate({
            scrollTop: $(scrollTo).offset().top
        }, 800);
    }

    $('a.about').on('click', function(e){
        e.preventDefault();
        scroll('#about')
    })

    $('a.blog').on('click', function(e){
        e.preventDefault();
        scroll('#blog')
    })

    $('a.contact').on('click', function(e){
        e.preventDefault();
        scroll('#contact') 
    })

    $('a.home').on('click', function (e) {
        e.preventDefault();
        scroll('#home') 
    })
});
