// Dynamic copyright year
const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Last modified date
const lastModifiedPara = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedPara.textContent = `Last Modification: ${lastModifiedDate}`;

// Hamburger menu toggle
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    
    // Toggle button symbol between hamburger and X
    if (navLinks.classList.contains('show')) {
        menuButton.textContent = '✕';
    } else {
        menuButton.textContent = '☰';
    }
});