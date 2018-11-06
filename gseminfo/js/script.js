//аякс для пулинга данных в базу
$(function() {
    console.log("UHt");
    $('#send').click(function() {
        console.log("UH");
        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: $('#gsemForm').serialize()
        }).done(function(data) {
            console.log(data);
            window.location.href= "/succcess.html";
        }).fail(function() {
            console.log('fail');
        });
    });
});




/*Плавный скрол по странице*/
$('#arrowanchor').on("click", function () {
    smoothScroll('gsemForm');
});


/*Редирект на страницу после успешной отправки формы*/
$('.mailform-sendbutton').on("click", function () {
    window.location.href = "http://gsem.info/";
});


/*Тогл на сошиал баттон*/
$('#i-have-a-tooltip').on("click", function () {
    if ($("#mobilink").is(":hidden")) {
        $("#mobilink").slideDown("slow");
    } else {
        $("#mobilink").slideUp();
    }
});


$('.tab').next().hide();
$('.tab').click(function(){
    $(this).next().slideToggle();
    $('.tab').not(this).next().stop(true,true).slideUp();
});



$('.oneClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#one").is(":hidden")) {
        $("#one").slideDown("slow");

    }
    else if ($("#one").is(":visible")) {
        $("#one").slideUp("slow");
    }
});


$('.twoClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#two").is(":hidden")) {
        $("#two").slideDown("slow");

    }
    else if ($("#two").is(":visible")) {
        $("#two").slideUp("slow");
    }
});

$('.threeClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#three").is(":hidden")) {
        $("#three").slideDown("slow");
    }
    else if ($("#three").is(":visible")) {
        $("#three").slideUp("slow");
    }
});

$('.fourClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#four").is(":hidden")) {
        $("#four").slideDown("slow");
    }
    else if ($("#four").is(":visible")) {
        $("#four").slideUp("slow");
    }
});

$('.fiveClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#five").is(":hidden")) {
        $("#five").slideDown("slow");
    }
    else if ($("#five").is(":visible")) {
        $("#five").slideUp("slow");
    }
});

$('.sixClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#six").is(":hidden")) {
        $("#six").slideDown("slow");
    }
    else if ($("#six").is(":visible")) {
        $("#six").slideUp("slow");
    }
});

$('.sevenClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#seven").is(":hidden")) {
        $("#seven").slideDown("slow");
    }
    else if ($("#seven").is(":visible")) {
        $("#seven").slideUp("slow");
    }
});

$('.eightClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#eight").is(":hidden")) {
        $("#eight").slideDown("slow");
    }
    else if ($("#eight").is(":visible")) {
        $("#eight").slideUp("slow");
    }
});

$('.nineClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#nine").is(":hidden")) {
        $("#nine").slideDown("slow");
    }
    else if ($("#nine").is(":visible")) {
        $("#nine").slideUp("slow");
    }
});

$('.tenClick').on("click", function () {
    $('.tabs-preview').css('display','none');
    $(".tabs-content").css('display','block');
    if ($("#ten").is(":hidden")) {
        $("#ten").slideDown("slow");
    }
    else if ($("#ten").is(":visible")) {
        $("#ten").slideUp("slow");
    }
});