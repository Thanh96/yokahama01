$(document).ready(function () {
    //scroll content
    var device = $("html, body").width();
    if(device < 767) {
      var device_height = $(window).height();
      var heightTT = $(".wrapper").height();
      console.log(device_height);
      console.log(heightTT);
      if (heightTT > device_height) {
        $("html, body").css("overflow-y", "scroll");
      } else {
        $("html, body").css("overflow-y", "hidden");
      }
    }
    // end scroll

    // show menu phone
    $(".menu-header-phone").click(function () {
        $(".tab-menu").slideToggle(600);
        if ($(".menu-header-phone").hasClass("menu-header-phone-show")) {
            $(".menu-header-phone").removeClass("menu-header-phone-show");
        }
        else {
            $(".menu-header-phone").addClass("menu-header-phone-show");
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

    // position logo
    var device = $("html, body").width();

    if (device > 767) {
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
    //end position log



    //height content and margin-top logo
    var heightDevice = $(window).height();
    var Header = $(".header").outerHeight();
    var heightFooter = $(".footer-phone").outerHeight();
    var heightIndex = $(".contentPage").outerHeight();
    var heightNewContent = heightDevice - heightFooter;
    var heightLogo = $(".content-bg").outerHeight();

    if (heightDevice > heightIndex + heightFooter + Header) {
        $(".contentPage").height(heightNewContent);
        if (device < 767) {
            var paddingLogo1 = (heightNewContent - heightLogo - Header) / 2 + Header;
            $(".content-bg").css("margin-top", paddingLogo1);
        }
    } else {
        if (device < 767) {
            var paddingLogo2 = (heightIndex - heightLogo ) / 2 + Header;
            $(".content-bg").css("margin-top", paddingLogo2);
        }
    }

});
$(window).resize(function () {
    var device = $("html, body").width();
    if (device > 767) {
      var device_height = $(window).height();
      var heightTT = $(".wrapper").height();
      console.log(device_height);
      console.log(heightTT);
      if(heightTT > device_height) {
        $("html, body").css("overflow-y","scroll");
      } else {
        $("html, body").css("overflow-y","hidden");
      }
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

            if (device < 767) {
                var paddingLogo1 = (heightNewContent - heightLogo - Header) / 2 + Header;
                $(".content-bg").css("margin-top", paddingLogo1);
            }
        } else {
            if (device < 767) {
                var paddingLogo2 = (heightIndex - heightLogo ) / 2 + Header;
                $(".content-bg").css("margin-top", paddingLogo2);
            }
        }
    }
});
