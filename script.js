const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

document.getElementById('projectForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Looks good! This demo does not send yet. Connect the form to your preferred form or email service when you are ready.';
  note.style.color = '#28755c';
});
