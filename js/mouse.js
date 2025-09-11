const effect = document.querySelector('.cursor-effect');
const body = document.body;

document.addEventListener('mousemove', (e) => {
  // set position of the circle
  effect.style.left = `${e.pageX - 150}px`;
  effect.style.top = `${e.pageY - 150}px`;

  // add active class for scaling
  body.classList.add('active');

  // remove after small delay for smooth transition
  clearTimeout(effect.timer);
  effect.timer = setTimeout(() => {
    body.classList.remove('active');
  }, 150);
});