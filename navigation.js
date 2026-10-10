'use strict';
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navlinks');
const mobileLayout = window.matchMedia('(max-width: 760px)');
function closeNavigation(restoreFocus = false) {
  const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
  if (wasOpen && restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  navigation.classList.toggle('open', isOpen);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeNavigation();
});
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeNavigation();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeNavigation(true);
});
mobileLayout.addEventListener('change', () => closeNavigation());
