(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the login and register tabs
    var loginTab = document.getElementById("tab-login");
    var registerTab = document.getElementById("tab-register");
    
    // Get references to the login and register form containers
    var loginForm = document.getElementById("pills-login");
    var registerForm = document.getElementById("pills-register");

    // Add click event listener to the register tab
    registerTab.addEventListener("click", function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Hide the login form and show the register form
        loginForm.classList.remove("show", "active");
        registerForm.classList.add("show", "active");

        // Update active classes for tabs
        loginTab.classList.remove("active");
        registerTab.classList.add("active");

        loginTab.style.removeProperty("background-color");
        registerTab.style.backgroundColor = "#4B9D7B";
    });

    // Add click event listener to the login tab
    loginTab.addEventListener("click", function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Hide the register form and show the login form
        registerForm.classList.remove("show", "active");
        loginForm.classList.add("show", "active");

        // Update active classes for tabs
        registerTab.classList.remove("active");
        loginTab.classList.add("active");

        loginTab.style.backgroundColor = "#4B9D7B";
        registerTab.style.removeProperty("background-color");

    });
});

