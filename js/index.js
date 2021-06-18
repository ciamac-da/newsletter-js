const section     = document.querySelector('section');
const closeButton = document.querySelector('section div span');
const page        = document.body
page.addEventListener('mousemove', function showDiv(ev) {
  if (ev.clientY < 10) {
    section.classList.add('showForm');
    ev.currentTarget.removeEventListener('mousemove', showDiv);
  }
});

closeButton.addEventListener('click', function(ev) {
  section.classList.remove('showForm');
});
