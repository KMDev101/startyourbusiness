
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
    smartSpeed: 1000,
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
      SlickNav
    ======================================*/
  $('.nav-slick').slicknav({
    label: '',
    duration: 500,
    easingOpen: "easeOutBounce", //available with jQuery UI
    prependTo: '.mobile-nav'
  });
  /* ===========================================
        Counter up for stats
========================================== */
  $(function () {
    $('.counter').counterUp({
      time: 2000,
      delay: 10
    });
  });
});
/* ===========================================
        Portfolio Isotope Filter
========================================== */
$(window).on('load', function () {
  // Initialize Isotope
  $('#isotope-container').isotope({
    // options here...
  });

  // filter items on button click
  $('#isotope-filters').on('click', '.btn', function () {
    // Get filter value
    var filterValue = $(this).attr('data-filter');

    // Filter portfolio Items
    $('#isotope-container').isotope({
      // options here...
      filter: filterValue
    });

    // active button
    $('#isotope-filters').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});
