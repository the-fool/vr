import './style.scss';

(function() {
  var navState = 0;
  document.getElementById('open').addEventListener("click", toggleNav);

  function toggleNav() {
    console.log('here');
    var button = document.getElementById('open');
    var nav = document.getElementById('nav');
    if (navState === 1) {
      navState = 0;
      button.classList.remove('is-active');
      nav.style.width = 0;
    } else {
      navState = 1;
      button.classList.add('is-active');
      nav.style.width = '100%';
    }
  }
})();
