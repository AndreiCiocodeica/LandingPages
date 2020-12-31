const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const navList = document.querySelector('.nav-list');


// open the menu on click
openBtn.addEventListener('click', () => {
    navList.classList.add('active');
});

// close the menu on click
closeBtn.addEventListener('click', () => {
    navList.classList.remove('active');
});
