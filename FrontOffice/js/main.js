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

//---------------------- Calendário---------------------------// 
const calendar = document.querySelector(".calendar"),
      date = document.querySelector(".date"),
      daysContainer = document.querySelector(".days"),
      prev = document.querySelector(".prev"),
      next = document.querySelector(".next"),
      todayBtn = document.querySelector(".todaybtn"),
      gotoBtn = document.querySelector(".gotobtn"),
      dateInput = document.querySelector(".date-input");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

// função para adicioar os dias
function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + " " + year;

    let days = "";

    // dias do mês anterior
    for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
    }

    // dias do mês atual
    for (let i = 1; i <= lastDate; i++) {
        // se o dia for hoje
        if (
            i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()
        ) {
            days += `<div class="day today">${i}</div>`;
        } 
        // resto dos dias
        else {
            days += `<div class="day">${i}</div>`;
        }
    }

    // dias do mês a seguir
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next-date">${j}</div>`;
    }

    daysContainer.innerHTML = days;
}

initCalendar();

// aceder a meses anteriores
function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
}

// aceder a meses a seguir
function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
}

// adicionar evento nas setas 
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

// botão para ir para o dia atual
todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});

// inserir data
dateInput.addEventListener("input", (e) => {
    // só permite números
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
        dateInput.value += "/";
    }
    if (dateInput.value.length > 7) {
        dateInput.value = dateInput.value.slice(0, 7);
    }

    if (e.inputType === "deleteContentBackward") {
        if (dateInput.value.length === 3) {
            dateInput.value = dateInput.value.slice(0, 2);
        }
    }
});

// ir para a data
function gotoDate() {
    const dateArr = dateInput.value.split("/");
    // validações
    if (dateArr.length === 2) {
        if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
            month = dateArr[0] - 1;
            year = dateArr[1];
            initCalendar(); 
            return;
        }
    }
    // data invalida
    alert("Data inválida!");
}

// botão de Ir
gotoBtn.addEventListener("click", gotoDate);