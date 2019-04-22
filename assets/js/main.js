


    $(document).ready(function(){

  /* ---------------------------------------------- /*
  * Preloader
  /* ---------------------------------------------- */

    $('#pre-status').fadeOut();
     $('#tt-preloader').delay(350).fadeOut('slow');


 /* ---------------------------------------------- /*
     * Sticky header
    /* ---------------------------------------------- */

    $("#sticky-header").sticky({

      topSpacing:0,
      zIndex:'',


    });

 /* ---------------------------------------------- /*
     * Smooth Scroll
    /* ---------------------------------------------- */

    $('html').smoothScroll(450);

 /* ---------------------------------------------- /*
     * Prgress Bar
    /* ---------------------------------------------- */


    $('#progressbar1').LineProgressbar({
      percentage: 90,
      fillBackgroundColor: '#fc6052',
      height: '10',
      radius: '15px',
    });

    $('#progressbar2').LineProgressbar({
      percentage: 93,
      fillBackgroundColor: '#fc6052',
      height: '10',
      radius: '15px',
    });

    $('#progressbar3').LineProgressbar({
      percentage: 88,
      fillBackgroundColor: '#fc6052',
      height: '10',
      radius: '15px',
    });

    $('#progressbar4').LineProgressbar({
      percentage: 85,
      fillBackgroundColor: '#fc6052',
      height: '10',
      radius: '15px',
    });


 /* ---------------------------------------------- /*
     * Circle pregress bar
    /* ---------------------------------------------- */


    $('#circle').circleProgress({
    value: 0.79,
    size: 150,
    fill: {
      gradient: ["#fc6052",]
    }
  });

    $('#circle2').circleProgress({
    value: 0.68,
    size: 150,
    fill: {
      gradient: ["#fc6052",]
    }
  });

    $('#circle3').circleProgress({
    value: 0.70,
    size: 150,
    fill: {
      gradient: ["#fc6052",]
    }
  });

    $('#circle4').circleProgress({
    value: 0.65,
    size: 150,
    fill: {
      gradient: ["#fc6052",]
    }
  });

    $('#circle5').circleProgress({
    value: 0.71,
    size: 150,
    fill: {
      gradient: ["#fc6052",]
    }
  });

    $('#circle6').circleProgress({
    value: 0.89,
    size: 150,
    fill: {
      gradient: ["#fc6052",]
    }
  });

  });

$(document).ready(function(){

/* ---------------------------------------------- /*
 * COunter Up
/* ---------------------------------------------- */

  $('.single-client-box span').counterUp({
        delay: 10,
        time: 1000
    });

 /* ---------------------------------------------- /*
     * Owl Carousel
    /* ---------------------------------------------- */
  $('.owl-carousel').owlCarousel({
          items:1,
          loop:true,
          autoplay:false,
          dots:true,
          nav:false,
          autoplay:false

        });

});
 /* ---------------------------------------------- /*
     * Wow js
    /* ---------------------------------------------- */

    new WOW().init();
/* ---------------------------------------------- /*
     *Isotope Masonary
    /* ---------------------------------------------- */
  $(document).ready(function(){

    $('.portfolio-masonry').isotope();

    $(".portfolio-menu li").on('click', function(){

      $(".portfolio-menu li").removeClass("active");
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $('.portfolio-masonry').isotope({
        filter: selector
      });


    });
        $('body').materialScrollTop();

/* ---------------------------------------------- /*
     *Fancybox Video
    /* ---------------------------------------------- */
   $(".video-icon").fancybox({
    'type'        : 'iframe',
  });
    
    });