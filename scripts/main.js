// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Toggle menu when clicking the hamburger icon
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navList.classList.contains('active') && !e.target.closest('.nav-list') && !e.target.closest('.menu-toggle')) {
        navList.classList.remove('active');
    }
});

// Close menu when clicking on a link
navList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navList.classList.remove('active');
    }
}); 