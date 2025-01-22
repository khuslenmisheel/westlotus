//In charge of putting buttons into drop down menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Toggling navigation bar functionality when it's in mobile/smaller screen
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})