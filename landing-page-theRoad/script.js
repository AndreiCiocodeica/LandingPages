const container = document.querySelector('.container');
const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
let i = 0;
//add event for open-navbar-icon to open the nav-links(add a class to it)
document.querySelector('.open-navbar-icon').addEventListener('click', () => {
    container.classList.add('change');
});

//add event for close-navbar-icon to close the nav-links(remove the class)
document.querySelector('.close-navbar-icon').addEventListener('click', () => {
    container.classList.remove('change');
});

// different background-color for each nav link
document.querySelectorAll('.nav-link').forEach((item) => {
    item.style.cssText = `background-color: ${colors[i++]}`
});

// toggle cards front-side and back-side class
document.querySelectorAll('.navigation-button').forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change');
    }
});