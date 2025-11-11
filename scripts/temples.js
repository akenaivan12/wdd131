// Footer dynamic year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  // Change symbol from ☰ to X
  hamburger.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});
