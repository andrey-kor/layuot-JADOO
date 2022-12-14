const burgerElement = document.querySelector('.menu-burger');
const bodyElement =  document.querySelector('body');
const menuElement = document.querySelector('.header__menu');

export default function menuBurger() {
    burgerElement.addEventListener('click', () => {
        
        if (burgerElement.classList.contains('menu-burger_active')) closeMenu();
        else openMenu();

        const clickEvent = function(event){
            if ((event.clientY > parseInt(getComputedStyle(menuElement).height))) {
                closeMenu();
                document.removeEventListener('click', clickEvent);
            }
            else if (event.target.closest('li')) {
                closeMenu();
                document.removeEventListener('click', clickEvent);

                let blockName;
                if (event.target.tagName == 'LI'){
                    blockName = event.target.firstElementChild.dataset.blockId;
                }
                else if(event.target.tagName == 'A'){
                    blockName = event.target.dataset.blockId;
                }
                 
                if(blockName) {
                    window.scroll(0, document.querySelector(`#${blockName}-block`).getBoundingClientRect().top);
                }                
            }
        }
        document.addEventListener('click', clickEvent)
    })
}
    
function closeMenu() {
    if (burgerElement.classList.contains('menu-burger_active')){
        burgerElement.classList.remove('menu-burger_active');
    }
    if (bodyElement.classList.contains('body_frozen')){
        bodyElement.classList.remove('body_frozen');
    }
    if (menuElement.classList.contains('header__menu_active')){
        menuElement.classList.remove('header__menu_active');
    }
}

function openMenu() {
    burgerElement.classList.add('menu-burger_active');
    bodyElement.classList.add('burger_active');
    menuElement.classList.add('header__menu_active');
    document.querySelector('body').classList.add('body_frozen');
}