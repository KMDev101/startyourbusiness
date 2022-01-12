// script.js


$(document).ready(function () {
  /*====================================
        Preloader JS
      ======================================*/
  setTimeout(function () {
    $('.preloader').fadeToggle();
  }, 1500);
  /*====================================
      Owl carousel
    ======================================*/
  // hero slider
  $(".hero-container").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      998: {
        items: 1
      }
    }
  });
  // testimonial slider
  $(".testimonial-slider").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      998: {
        items: 1
      }
    }
  });
  // team slider
  $(".team-slider").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      998: {
        items: 3
      }
    }
  });
  // posts slider
  $(".posts-slider").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      998: {
        items: 2
      }
    }
  });
  // Clients-slider
  // team slider
  $(".client-slider").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 4
      },
      998: {
        items: 6
      }
    }
  });
  /*====================================
      WOW JS
    ======================================*/
  new WOW().init();

  /*====================================
      Mix it up Filter
    ======================================*/
  var mixer = mixitup('.project-details');
  /*====================================
      SlickNav
    ======================================*/
  $('#nav').slicknav({
    label: '',
    duration: 1000,
    easingOpen: "easeOutBounce", //available with jQuery UI
    prependTo: '.mobile-nav'
  });
  /*====================================
        Counter
      ======================================*/
  $('.number').counterUp({
    time: 3000
  });
});

