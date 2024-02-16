console.log("main.js loaded!")

function classToggle() {
    console.log('clicked menu toggle!')
    const navs = document.querySelectorAll('.navbar-items')

    navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));
}

document.querySelector('.navbar-link-toggle').addEventListener('click', classToggle);

