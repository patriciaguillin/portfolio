// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Scrollorama and TweenMax appear disappear elements
$(function () {
    $('#Container').mixItUp();
});
$(document).ready(function () {
    var controller = $.superscrollorama();
    // individual element tween examples
    controller.addTween('#scale-it', TweenMax.fromTo($('#scale-it'), .1, {
        css: {
            opacity: 0,
            scale: 0
        },
        immediateRender: true,
        ease: Quad.easeInOut
    }, {
        css: {
            opacity: 1,
            scale: 1
        },
        ease: Quad.easeInOut
    }));
    controller.addTween('#scale-it2', TweenMax.fromTo($('#scale-it2'), .2, {
        css: {
            opacity: 0,
            scale: 0
        },
        immediateRender: true,
        ease: Quad.easeInOut
    }, {
        css: {
            opacity: 1,
            scale: 1
        },
        ease: Quad.easeInOut
    }));
    controller.addTween('#scale-it3', TweenMax.fromTo($('#scale-it3'), .3, {
        css: {
            opacity: 0,
            scale: 0
        },
        immediateRender: true,
        ease: Quad.easeInOut
    }, {
        css: {
            opacity: 1,
            scale: 1
        },
        ease: Quad.easeInOut
    }));
    controller.addTween('#scale-it4', TweenMax.fromTo($('#scale-it4'), .4, {
        css: {
            opacity: 0,
            scale: 0
        },
        immediateRender: true,
        ease: Quad.easeInOut
    }, {
        css: {
            opacity: 1,
            scale: 1
        },
        ease: Quad.easeInOut
    }));
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