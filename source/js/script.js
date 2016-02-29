(function (d, w){
  // LESS TYPING
  var $ = d.querySelector.bind(d);
  var $$ = d.querySelectorAll.bind(d);

  // POSTS NAV POSITION
  var nav = $('.post-nav');
  var navUpdateTicking = false;

  if (nav) {
    var navTop = nav.getBoundingClientRect().top;
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

  updateNav();

  // .post-footer comments button
  var disqus = $('#disqus_thread');
  var commentsTriiger = $('#comments-trigger');
  var disqus_loaded = false;
  commentsTriiger.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (! disqus_loaded) {
      load_disqus(); // from _partial/disqus.ejs
      disqus_loaded = true;
    } else {
      disqus.classList.toggle('hide');
    }
  });

}(document, window))