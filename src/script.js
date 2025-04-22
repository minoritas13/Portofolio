window.onscroll = function(){
    const header = document.querySelector('header');
    const navMenu = document.querySelector('#nav-menu');
    const hamburger = document.querySelector('#hamburger');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        navMenu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active');
    }else{
        header.classList.remove('navbar-fixed');
    }


};


const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});