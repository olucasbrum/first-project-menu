const buttonToggle = document.querySelector('#openMenu');
const navMobile = document.querySelector('#navigation');

buttonToggle.addEventListener('click', () => {
  buttonToggle.classList.toggle('active');
  navMobile.classList.toggle('active');
});