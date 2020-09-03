$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        let el = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 3000);
        return false;
    });


    $(window).scroll(function () {
        let windowHeight = $(window).height();
        if ($(window).scrollTop() > $(window).height()) {
            $('#scroll-up').fadeIn(500);
        } else {
            $('#scroll-up').fadeOut(500);
        }

    });
    $('#scroll-up').click(function () {
        $('html, body').animate({scrollTop: 0}, '200');


    });

    $('#hide-btn').click(function () {
        $("#hot-news").slideToggle(300)
    })

});







