(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

// })(jQuery); // End of use strict
// // 

// $(function () {

//     function initMap() {

//         var location = new google.maps.LatLng(50.0875726, 14.4189987);

//         var mapCanvas = document.getElementById('map');
//         var mapOptions = {
//             center: location,
//             zoom: 16,
//             panControl: false,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//         var map = new google.maps.Map(mapCanvas, mapOptions);

//     }

//     google.maps.event.addDomListener(window, 'load', initMap);
// });

// $(function () {

//     function initMap() {

//         var location = new google.maps.LatLng(50.0875726, 14.4189987);

//         var mapCanvas = document.getElementById('map');
//         var mapOptions = {
//             center: location,
//             zoom: 16,
//             panControl: false,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//         var map = new google.maps.Map(mapCanvas, mapOptions);

//         var markerImage = 'marker.png';

//         var marker = new google.maps.Marker({
//             position: location,
//             map: map,
//             icon: markerImage
//         });

//         var contentString = '<div class="info-window">' +
//                 '<h3>Info Window Content</h3>' +
//                 '<div class="info-content">' +
//                 '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
//                 '</div>' +
//                 '</div>';

//         var infowindow = new google.maps.InfoWindow({
//             content: contentString,
//             maxWidth: 400
//         });

//         marker.addListener('click', function () {
//             infowindow.open(map, marker);
//         });


//     }

//     google.maps.event.addDomListener(window, 'load', initMap);
// });


// var marker = new google.maps.Marker({position: myCenter});

// marker.setMap(map);
