/**
 * Created by Truong Thanh on 8/18/2017.
 */
$(document).ready(function () {
  // show menu phone
  $(".menu-header-phone").click(function () {
    $(".tab-menu").slideToggle(600);
    if ($(".menu-header-phone").hasClass("menu-header-phone-show")) {
      $(".menu-header-phone").removeClass("menu-header-phone-show");
    } else {
      $(".menu-header-phone").addClass("menu-header-phone-show");
    }
  });
  // end show menu phone

  // click menu
  $(".select-item").click(function () {
    $(".item-select li").removeClass("active");
    $(this).addClass("active");
    $(".item-product").fadeIn(300);
    $(".item-history").fadeOut(300);
  });
  $(".select-history").click(function () {
    $(".item-select li").removeClass("active");
    $(this).addClass("active");
    $(".item-product").fadeOut(500);
    $(".item-history").fadeIn(500);
  });
  //end click menu

  // video play
  $('.video-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true
  });
  // end video play

  // menu topic click
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
  // end menu topic click

  // menu topic scroll
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
      if (currentScroll  >= fixmeTop) {           // apply position: fixed if you
        menuScroll.addClass("scrollTopMenu");
        contentScroll.css("margin-top", marginTop);
      } else {                                   // apply position: static
        menuScroll.removeClass("scrollTopMenu");
        contentScroll.css("margin-top", 0);
      }
    } else {
      if(menuScroll.height() > 100) {
        marginTop = 401;
      } else {
        marginTop = 101;
      }
      if (currentScroll + 50 >= fixmeTop) {           // apply position: fixed if you
        menuScroll.addClass("scrollTopMenu");
        contentScroll.css("margin-top", marginTop);
      } else {                                   // apply position: static
        menuScroll.removeClass("scrollTopMenu");
        contentScroll.css("margin-top", 0);
      }
    }

  });
  // end menu topic scroll

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
});