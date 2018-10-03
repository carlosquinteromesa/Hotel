document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
    let nav = document.querySelector('nav')
    let elems = document.querySelectorAll('.scrollspy')
    let options = {
      scrollOffset: 100
    }
    var instances = M.ScrollSpy.init(elems, options)
    window.addEventListener('scroll', () => {
      if(window.pageYOffset>30){
        nav.classList.add('nav-scroll')
      }else if(window.pageYOffset<30){
        nav.classList.remove('nav-scroll')
      }
    })
  })
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel')
  
   
    var arrowright = document.querySelector('.arrowright')
    var arrowleft = document.querySelector('.arrowleft')
    var instance = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    })
    
    arrowright.addEventListener('click', () => {
      var instances = M.Carousel.getInstance(elems[0])
      instances.next()
    })
    arrowleft.addEventListener('click', () => {
      var instances = M.Carousel.getInstance(elems[0])
      instances.prev()
    })
   
    
  })