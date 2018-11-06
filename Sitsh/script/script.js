/*Функция для открытия и закрытия мобильного меню*/
$(function () {
    $('.button').on("click", function () {
        if ($('body').hasClass('nav_is_visible') === true) {
            $('body').removeClass('nav_is_visible');
            $('.button').removeClass('close');
        }
        else {
            $('body').addClass('nav_is_visible');
            $('.button').addClass('close');

        }
    });

    $('li').on("click", function () {
        if ($('body').hasClass('nav_is_visible') === true) {
            $('body').removeClass('nav_is_visible');
            $('.button').removeClass('close');
        }
        else {
            $('body').addClass('nav_is_visible');
            $('.button').addClass('close');
        }
    });

    /*Якорь по клику в десктопном меню*/
    $('#contactsButtonDesk').on("click", function () {
        smoothScroll('contacts');
    });

    $('#priceButtonDesk').on("click", function () {
        smoothScroll('price');
    });

    $('#aboutusButtonDesk').on("click", function () {
        smoothScroll('aboutus');
    });

    $('#mainButtonDesk').on("click", function () {
        smoothScroll('main');
    });

    $('#advantagesButtonDesk').on("click", function () {
        smoothScroll('advantages');
    });

    /*Якорь по клику в мобильном меню*/
    $('#contactsButtonMobi').on("click", function () {
        smoothScroll('contacts');
    });

    $('#priceButtonMobi').on("click", function () {
        smoothScroll('price');
    });

    $('#aboutusButtonMobi').on("click", function () {
        smoothScroll('aboutus');
    });

    $('#mainButtonMobi').on("click", function () {
        smoothScroll('main');
    });

    $('#advantagesButtonMobi').on("click", function () {
        smoothScroll('advantages');
    });

    /*Функция для кнопки отправить заявку*/
    $('.contact-us-sendbutton').on("click", function () {
        smoothScroll('link');
    });

    /*Редирект на страницу после успешной отправки формы*/
    $('.mailform-sendbutton').on("click", function () {
        window.location.href = "http://ege.sitsh.ru";
    });

    /*Открытие модалки по клику на кнопки на странице "оставить заявку"*/
    $('.variants-offerbutton').on("click", function () {
        if ($('#openModal').hasClass('modal-dialog-closed') === true) {
            $('#openModal').removeClass('modal-dialog-closed');
            $('#openModal').addClass('modal-dialog-open');
            if ($('#openModal').hasClass('modal-dialog-open') === true) {
                $('body').addClass('open-modal');
            }
        }
    });

    /*Открытие модалки по клику на кнопку на странице "проконсультироваться"*/
    $('.top-header-consultbutton').on("click", function () {
        if ($('#openModal').hasClass('modal-dialog-closed') === true) {
            $('#openModal').removeClass('modal-dialog-closed');
            $('#openModal').addClass('modal-dialog-open');
            if ($('#openModal').hasClass('modal-dialog-open') === true) {
                $('body').addClass('open-modal');
            }
        }
    });

    /*Открытие модалки по клику на кнопку(кастомную) в первом блоке "оставить заявку"*/
    $('.top-header-offerbutton').on("click", function () {
        if ($('#openModal').hasClass('modal-dialog-closed') === true) {
            $('#openModal').removeClass('modal-dialog-closed');
            $('#openModal').addClass('modal-dialog-open');
            if ($('#openModal').hasClass('modal-dialog-open') === true) {
                $('body').addClass('open-modal');
            }
        }
    });

    /*Закрытие модалки по клику на иконку крестика*/
    $('#close').on("click", function () {
        if ($('#openModal').hasClass('modal-dialog-open') === true) {
            $('#openModal').removeClass('modal-dialog-open');
            $('#openModal').addClass('modal-dialog-closed');
            $('body').removeClass('open-modal');
        }
    });

    /*Открытие скрытого блока формы внутри всплывающей модалки popup'a*/
    $('.modal-offer-offerbutton').on("click", function () {
        $('.modal-offer-offerbutton').hide('slow');
        $('.hiden-offer-modal-form').show('slow');
    });

    /*Закрытие модалки popup'a по клику на иконку крестика*/
    $('#closeOffer').on("click", function () {
        if ($('#openOfferModal').hasClass('modal-offer-dialog-open') === true) {
            $('#openOfferModal').removeClass('modal-offer-dialog-open');
            $('#openOfferModal').addClass('modal-offer-dialog-closed');
            $('body').removeClass('open-modal-offer');
        }
    });

    /*Открытие модалки popup'a через 25 секунд*/
    setTimeout(function () {
        if ($('#openModal').hasClass('modal-dialog-open') === false) {
            if ($('#openOfferModal').hasClass('modal-offer-dialog-closed') === true) {
                $('#openOfferModal').removeClass('modal-offer-dialog-closed');
                $('#openOfferModal').addClass('modal-offer-dialog-open');
                if ($('#openOfferModal').hasClass('modal-offer-dialog-open') === true) {
                    $('body').addClass('open-modal-offer');
                }
            }
        }
    }, 2000);

});


/*Карусель owl carousel*/
let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 20000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [20000])
});
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});