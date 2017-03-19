import './experience.scss';

let navstate = 0;
let button = document.getElementById('open');
let nav = document.getElementById('nav');

button.addEventListener('click', toggleNav);

function toggleNav() {
  if (navstate === 1) {
    navstate = 0;
    button.classList.remove('is-active');
  } else {
    navstate = 1;
    button.classList.add('is-active');
  }
}
