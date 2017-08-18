$(document).ready(function () {
    // show menu phone
    $(".menu-header-phone img").click(function () {
        var show = $(".menu-header-phone").css("margin-top");
        $(".tab-menu").slideToggle(600);
        if (show == "-29px") {
            $(".menu-header-phone").css("margin-top", "10px");
            $("body, html").css("overflow-y", "scroll");
        }
        else {
            $(".menu-header-phone").css("margin-top", "-29px");
            $("body, html").css("overflow-y", "hidden");
        }
    });
    // end menu phone

    // video play
    $('.video-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true
    });
    // end video play

    // tính vi tri cho logo\
    var device = $("html, body").width();
    if (device > 415) {
        var widthContent = $(".slider").width();
        var widthNav = $(".nav-bar").width();
        var heightHeader = $(".header").outerHeight();
        var widthSlider = widthContent - widthNav - 500;
        var heightContent = $(".slider").height();
        var heightSlider = heightContent - 500 - heightHeader;
        var topLogo = heightSlider / 2 + heightHeader;
        var leftLogo = widthSlider / 2;
        $(".content-bg").css("top", topLogo);
        $(".content-bg").css("left", leftLogo);
    }
    $(".topics").click(function () {
        $(".menu-slider").slideToggle(600);

        var marginTop;
        var topicScroll = $(".topics-slider");
        var contentScroll = $(".content-page-02");

        if(topicScroll.hasClass('scrollTopMenu')) {

            console.log(menuScroll.height());

            if($(window).width() > 767) {
                if(menuScroll.height() > 100) {
                    marginTop = 110;
                } else {
                    marginTop = 322;
                }
            }
            else {
              if(menuScroll.height() > 100) {
                marginTop = 101;
              } else {
                marginTop = 401;
              }
            }

            contentScroll.animate({
                marginTop: marginTop
            }, 600);
        }
    });

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                // On-page links
                if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                        &&
                        location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                            ;
                        });
                    }
                }
            });

    //tinh height cho content and margin-top logo
    var heightDevice = $(window).height();
    var Header = $(".header").outerHeight();
    var heightFooter = $(".footer-phone").outerHeight();
    var heightIndex = $(".contentPage").outerHeight();
    var heightNewContent = heightDevice - heightFooter;
    var heightLogo = $(".content-bg").outerHeight();

    if (heightDevice > heightIndex + heightFooter + Header) {
        $(".contentPage").height(heightNewContent);
        if (device < 415) {
            var paddingLogo1 = (heightNewContent - heightLogo - Header) / 2 + Header;
            $(".content-bg").css("margin-top", paddingLogo1);
        }
    } else {
        if (device < 415) {
            var paddingLogo2 = (heightIndex - heightLogo ) / 2 + Header;
            $(".content-bg").css("margin-top", paddingLogo2);
        }
    }

    var menuScroll = $(".topics-slider");
    var fixmeTop = menuScroll.offset().top;
    var contentScroll = $(".content-page-02");

    $(window).scroll(function () {

        var currentScroll = $(window).scrollTop();
        var marginTop;

        if($(window).width() > 767) {
            if(menuScroll.height() < 100) {
                marginTop =  110;
            } else {
                marginTop = 322;
            }
        } else {
            if(menuScroll.height() > 100) {
              marginTop = 401;
            } else {
              marginTop = 101;
            }
        }

        if (currentScroll >= fixmeTop) {           // apply position: fixed if you
            menuScroll.addClass("scrollTopMenu");
            contentScroll.css("margin-top", marginTop);
        } else {                                   // apply position: static
            menuScroll.removeClass("scrollTopMenu");
            contentScroll.css("margin-top", 0);
        }
    });
});
$(window).resize(function () {
    var device = $("html, body").width();

    if (device > 415) {
        var widthContent = $(".slider").width();
        var widthNav = $(".nav-bar").width();
        var heightHeader = $(".header").outerHeight();
        var widthSlider = widthContent - widthNav - 500;
        var heightContent = $(".slider").height();
        var heightSlider = heightContent - 500 - heightHeader;
        var topLogo = heightSlider / 2 + heightHeader;
        var leftLogo = widthSlider / 2;

        $(".content-bg").css("top", topLogo);
        $(".content-bg").css("left", leftLogo);
        var heightDevice = $(window).height();
        var Header = $(".header").outerHeight();

        var heightFooter = $(".footer-phone").outerHeight();
        var heightIndex = $(".contentPage").outerHeight();
        var heightNewContent = heightDevice - heightFooter;
        var heightLogo = $(".content-bg").outerHeight();

        if (heightDevice > heightIndex + heightFooter + Header) {
            $(".contentPage").height(heightNewContent);

            if (device < 415) {
                var paddingLogo1 = (heightNewContent - heightLogo - Header) / 2 + Header;
                $(".content-bg").css("margin-top", paddingLogo1);
            }
        } else {
            if (device < 415) {
                var paddingLogo2 = (heightIndex - heightLogo ) / 2 + Header;
                $(".content-bg").css("margin-top", paddingLogo2);
            }
        }
    }
});
