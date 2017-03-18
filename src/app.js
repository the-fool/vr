import './style.scss';
import 'video.js';

(function() {
  var accent = '#4666a7';
  var light = '#fafafa';

  var navState = 0;
  document.getElementById('open').addEventListener("click", toggleNav);

  function toggleNav() {
    console.log('here');
    var button = document.getElementById('open');
    var nav = document.getElementById('nav');
    var left = document.getElementById('left');
    if (navState === 1) {
      navState = 0;
      button.classList.remove('is-active');
      nav.style.width = 0;
      left.style.color = light;
    } else {
      navState = 1;
      button.classList.add('is-active');
      nav.style.width = '100%';
      left.style.color = accent;
    }
  }
})();
