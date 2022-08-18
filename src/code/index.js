document.querySelector('.menu-burger').addEventListener('click', () => {
    const burgerElement = document.querySelector('.menu-burger');
    const bodyElement =  document.querySelector('body');
    const menuElement = document.querySelector('.header__menu');

    if (burgerElement.classList.contains('menu-burger_active')){
        burgerElement.classList.remove('menu-burger_active');
        bodyElement.classList.remove('burger-active');
        menuElement.classList.remove('header__menu_active');
    }
    else {
        burgerElement.classList.add('menu-burger_active');
        bodyElement.classList.add('burger-active');
        menuElement.classList.add('header__menu_active');
    }

})