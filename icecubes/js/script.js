/*Функция для открытия и закрытия мобильного меню*/
$(function () {
    $('.ice-cube__burger-button').on("click", function () {
        if ($('body').hasClass('nav_is_visible') === true) {
            $('body').removeClass('nav_is_visible');
            $('.ice-cube__burger-button').removeClass('close');
        }
        else {
            $('body').addClass('nav_is_visible');
            $('.ice-cube__burger-button').addClass('close');

        }
    });

    $('li').on("click", function () {
        if ($('body').hasClass('nav_is_visible') === true) {
            $('body').removeClass('nav_is_visible');
            $('.ice-cube__burger-button').removeClass('close');
        }
        else {
            $('body').addClass('nav_is_visible');
            $('.ice-cube__burger-button').addClass('close');
        }
    });


    /*Карусель owl carousel*/
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 16000,
        autoplayHoverPause: false
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [16000])
    });
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    });

});


$('.assortment-card__button').on("click", function () {
    smoothScroll('sendform');
});

$('#aboutusDesktop').on("click", function () {
    smoothScroll('aboutus');
});

$('#assortimentDesktop').on("click", function () {
    smoothScroll('assortment');
});

$('#linkedWithDesktop').on("click", function () {
    smoothScroll('sendform');
});

$('#deliveryDesktop').on("click", function () {
    smoothScroll('delivery');
});

$('#contactsButtonDesktop').on("click", function () {
    smoothScroll('contacts');
});

$('.ice-cube__advantages-droparrow').on("click", function () {
    smoothScroll('assortment');
});

$('#aboutusMobi').on("click", function () {
    smoothScroll('aboutus');
});

$('#assortimentMobi').on("click", function () {
    smoothScroll('assortment');
});

$('#linkedWithMobi').on("click", function () {
    smoothScroll('sendform');
});

$('#deliveryMobi').on("click", function () {
    smoothScroll('delivery');
});

$('#contactsButtonMobi').on("click", function () {
    smoothScroll('contacts');
});

/*Редирект на страницу после успешной отправки формы*/
$('.mailform-sendbutton').on("click", function () {
    window.location.href = "http://icecubes.ru/";
});


