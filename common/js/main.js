$(document).ready(function() {

    $('.smooth-scroll').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    if(!$("#page").hasClass("ie9")) {
        var wow = new WOW({
            offset: 200
        });
        wow.init();
    }

});

$(window).resize(function() {


});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 60) {
        $('#scroll-top').fadeIn();
    } else {
        $('#scroll-top').fadeOut();
    }
});