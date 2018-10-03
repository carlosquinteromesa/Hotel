document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);

    var sidnav = document.querySelectorAll('.sidenav');
    var instancessidnav = M.Sidenav.init(sidnav);

    AOS.init({ once: true })

    var carrucel = document.querySelectorAll('.carousel');
    var instancescarru = M.Carousel.init(carrucel);


  });