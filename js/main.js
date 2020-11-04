window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', scrollEvents);


});

const scrollEvents = () => {
    const showNavbar = () => {
        (window.scrollY > document.querySelector('header').offsetHeight - 25 && window.innerWidth > 575) ? document.querySelector('.navbar').classList.add('bg-move'): document.querySelector('.navbar').classList.remove('bg-move');
    };
    showNavbar();

    const headerParallax = () => {
        document.querySelector('.mask').style.transform = `translateY(${window.scrollY/1.2}px)`;
    };

    if (window.scrollY < document.querySelector('header').offsetHeight) {
        headerParallax();
    };
};