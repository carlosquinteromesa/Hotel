document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);

    var sidnav = document.querySelectorAll('.sidenav');
    var instancessidnav = M.Sidenav.init(sidnav);

    AOS.init({ once: true })

    var carrucel = document.querySelectorAll('.carousel');
    var instancescarru = M.Carousel.init(carrucel);


    var elemsaction = document.querySelectorAll('.fixed-action-btn');
    var instancesaction = M.FloatingActionButton.init(elemsaction );

    var elemstool = document.querySelectorAll('.tooltipped');
    var instancestool = M.Tooltip.init(elemstool);

    var elemsscrool = document.querySelectorAll('.scrollspy')
    var options=({
      throttle: 200
    })
    var instancesscroll = M.ScrollSpy.init(elemsscrool, options)
  });