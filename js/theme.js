$(document).ready(function () {
  // show menu phone
  $(".menu-header-phone img").click(function () {
    var show = $(".menu-header-phone").css("margin-top");
    $(".tab-menu").slideToggle("slow");
    if( show == "-29px" )
    {
      $(".menu-header-phone").css("margin-top","10px");
      $("body, html").css("overflow-y","scroll");
    }
    else
    {
      $(".menu-header-phone").css("margin-top","-29px");
      $("body, html").css("overflow-y","hidden");
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
  // tính vi tri cho logo
  var device = $("html, body").width();
  if(device > 415) {
    var widthContent = $(".slider").width();
    var widthNav = $(".nav-bar").width();
    var heightHeader = $(".header").outerHeight();
    var widthSlider = widthContent - widthNav - 500;
    var heightContent = $(".slider").height();
    var heightSlider = heightContent - 500 - heightHeader;
    var topLogo = heightSlider/2 + heightHeader;
    var leftLogo = widthSlider/2;
    $(".content-bg").css("top",topLogo);
    $(".content-bg").css("left",leftLogo);
  }
  // topics page01
  $(".topics").click(function () {
    $(".menu-slider").slideToggle("slow");
  });
  // scroll menu top
  var menuScroll = $(".topics-slider");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 325) {
      menuScroll.addClass("scrollTopMenu");
      $(".detail-part-info").css("margin-top","50px");
    }
    else {
      menuScroll.removeClass("scrollTopMenu");
      $(".detail-part-info").css("margin-top","0px");
    }
  });
  //
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
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
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
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
  if( heightDevice > heightIndex + heightFooter + Header) {
    $(".contentPage").height(heightNewContent);
    if(device < 415) {
      var paddingLogo1 = (heightNewContent - heightLogo - Header)/2 + Header;
      $(".content-bg").css("margin-top",paddingLogo1);
    }
  }
  else {
    if(device < 415)
    {
      var paddingLogo2 = (heightIndex - heightLogo )/2 + Header;
      $(".content-bg").css("margin-top",paddingLogo2);
      console.log(heightIndex);
    }
  }
});
$(window).resize(function () {
});