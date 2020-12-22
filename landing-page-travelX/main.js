// Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

// when start scrolling add new class to header(nav)
window.addEventListener('scroll', () => {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition);
});

// hamburger icon click event toggle
hamburgerMenu.addEventListener("click", () => {
    header.classList.toggle('menu-open');
});

