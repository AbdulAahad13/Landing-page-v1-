

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-active');
    })
}

const App = () => {
    navSlide();
}