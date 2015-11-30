// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Wow apper disappear elements
$(function () {
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();
});
//Mixitup
$(function () {
    $('#Container').mixItUp();
});

// For Demo purposes only (show hover effect on mobile devices)
			[].slice.call(document.querySelectorAll('a[href="#"')).forEach(function (el) {
    el.addEventListener('click', function (ev) {
        ev.preventDefault();
    });
});



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Slide
$(function () {
    $('#ei-slider').eislideshow({
        animation: 'center',
        autoplay: true,
        slideshow_interval: 3000,
        titlesFactor: 0
    });
});