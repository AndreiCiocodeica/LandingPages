window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 4000);
}



//click on hamburger menu to display the sidebar
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
});

//click on scroll button (from footer to go up)
document.querySelector('.scroll-btn').addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = "smooth";

    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unset";
    }, 1000);
});