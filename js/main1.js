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