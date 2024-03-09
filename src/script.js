//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYoffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//nav menu hamburger
const hamburger = document.querySelect('#hamburger');
const navMenu = document.querySelector('nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toogle('hamburger-active');
})