import './style.scss';

var nav = 0;

document.getElementById('open').addEventListener("click", toggleNav);

function toggleNav() {
  console.log(nav, 'here');
  const button = document.getElementById('open');
  if (nav === 1) {
    nav = 0;
    button.classList.remove('is-active');
  } else {
    nav = 1;
    button.classList.add('is-active');
  }
}
