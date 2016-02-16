(function (d){
  // LESS TYPING
  var $ = d.querySelector.bind(d);

  // DISQUS
  var disqus = $('#disqus_thread');
  if (disqus) {
    var commentButton = $('#show-comment');
    if (commentButton) {
      commentButton.addEventListener('click', function (ev) {
        ev.preventDefault();
        disqus.style.display = disqus.style.display === 'block'
          ? 'none'
          : 'block';
      })
    }
  }
}(document))