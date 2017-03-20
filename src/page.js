import './page.scss';

let navstate = 0;
let button = document.getElementById('open');
let nav = document.getElementById('nav-outer');

button.addEventListener('click', toggleNav);

function toggleNav() {
  if (navstate === 1) {
    navstate = 0;
    button.classList.remove('is-active');
    nav.style.display = 'none';
  } else {
    navstate = 1;
    button.classList.add('is-active');
    nav.style.display = 'flex';
  }
}
