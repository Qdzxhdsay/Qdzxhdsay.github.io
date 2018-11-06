/*Функция для открытия и закрытия мобильного меню*/
$(function(){
    $('.button').on("click", function(){
        if($('body').hasClass('nav_is_visible') === true){
            $('body').removeClass('nav_is_visible');
            $('.button').removeClass('close');
        }
        else{
            $('body').addClass('nav_is_visible');
            $('.button').addClass('close');

        }
    });

    $('li').on("click", function(){
        if($('body').hasClass('nav_is_visible') === true){
            $('body').removeClass('nav_is_visible');
            $('.button').removeClass('close');
        }
        else{
            $('body').addClass('nav_is_visible');
            $('.button').addClass('close');
        }
    });
    $('#contactsButtonDesk').on("click", function(){
            smoothScroll('contacts');
    });
    $('#priceButtonDesk').on("click", function(){
        smoothScroll('price');
    });
    $('#aboutusButtonDesk').on("click", function(){
        smoothScroll('aboutus');
    });
    $('#mainButtonDesk').on("click", function(){
        smoothScroll('main');
    });
    $('#advantagesButtonDesk').on("click", function(){
        smoothScroll('advantages');
    });


    $('#contactsButtonMobi').on("click", function(){
        smoothScroll('contacts');
    });
    $('#priceButtonMobi').on("click", function(){
        smoothScroll('price');
    });
    $('#aboutusButtonMobi').on("click", function(){
        smoothScroll('aboutus');
    });
    $('#mainButtonMobi').on("click", function(){
        smoothScroll('main');
    });
    $('#advantagesButtonMobi').on("click", function(){
        smoothScroll('advantages');
    });

    $('.top-header-consultbutton').on("click", function(){
        smoothScroll('link');
    });
    $('.contact-us-sendbutton').on("click", function(){
        smoothScroll('link');
    });
    $('.variants-offerbutton').on("click", function(){
        smoothScroll('link');
    });
    $('.variants-offerbutton-two').on("click", function(){
        smoothScroll('link');
    });
    $('.top-header-offerbutton').on("click", function(){
        smoothScroll('link');
    });
    $('.sale-button').on("click", function(){
        smoothScroll('link');
    });
});

/*Карусель owl carousel*/

let owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:20000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[20000 ])
});
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});