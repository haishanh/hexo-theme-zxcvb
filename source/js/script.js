(function (d, w){
  // LESS TYPING
  var $ = d.querySelector.bind(d);
  var $$ = d.querySelectorAll.bind(d);

  // POSTS NAV POSITION
  var nav = $('.post-nav');
  var navTop = nav.getBoundingClientRect().top;
  var navUpdateTicking = false;

  if (nav) {
    w.addEventListener('scroll', function (e) {
      navTop = nav.getBoundingClientRect().top
      requestTick();
    });
  }

  function requestTick() {
    if(!navUpdateTicking) {
      requestAnimationFrame(updateNav);
    }
    navUpdateTicking = true;
  }

  function updateNav() {
    navUpdateTicking = false;

    var prev = $('.post-nav .prev');
    var next = $('.post-nav .next');
    if (navTop < w.innerHeight) {
      prev && !prev.classList.contains('stop') && prev.classList.add('stop');
      next && !next.classList.contains('stop') && next.classList.add('stop');
    } else {
      prev && prev.classList.contains('stop') && prev.classList.remove('stop');
      next && next.classList.contains('stop') && next.classList.remove('stop');
    }
  }
}(document, window))