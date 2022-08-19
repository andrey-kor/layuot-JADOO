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



setInterval(() => {
    if (document.documentElement.clientWidth >= 760){
        const cardWrapArr = document.querySelectorAll('.offer__card-wrapper');
        const cardArr = document.querySelectorAll('.offer__card');

        let acttiveCardIndex;
        cardWrapArr.forEach((item, index) => {
            if (item.classList.contains('offer__card-wrapper_active')) {
                acttiveCardIndex = index;
            }
        })
        if (!acttiveCardIndex) acttiveCardIndex = 0;

        cardWrapArr[acttiveCardIndex].classList.remove('offer__card-wrapper_active');
        cardArr[acttiveCardIndex].classList.remove('offer__card_active');
        
        if (acttiveCardIndex >= cardWrapArr.length-1) acttiveCardIndex = 0;
        else acttiveCardIndex += 1;

        cardWrapArr[acttiveCardIndex].classList.add('offer__card-wrapper_active');
        cardArr[acttiveCardIndex].classList.add('offer__card_active');
    }
    else {
        if (document.querySelector('.offer__card-wrapper_active')) {
            document.querySelector('.offer__card-wrapper_active').classList.remove('offer__card-wrapper_active');
        }
        if (document.querySelector('.offer__card_active')) {
            document.querySelector('.offer__card_active').classList.remove('offer__card_active');
        }
    }
}, 3000)


//if width < 1060px and width > 600px

const planeElement = document.querySelector('.flying-plane');
const destPageElement = document.querySelector('.dest-page');

let lastPageScroll = 0;
let scrollDir;

window.addEventListener('scroll', () => {

    const destTopPosition = window.pageYOffset + destPageElement.getBoundingClientRect().top;
    const destBottomPosition = window.pageYOffset + destPageElement.getBoundingClientRect().bottom;
    const destHight = destBottomPosition-destTopPosition;
    const clientWidth = document.documentElement.clientWidth;
    let pageScroll = scrollY - destTopPosition;
    
    if (pageScroll > 0 && pageScroll < destHight) {
        planeElement.style.top = pageScroll * 2 + 100 + 'px';
        planeElement.style.left = ((-(Math.abs((pageScroll/(destHight/4))-1))+1)*clientWidth) + 'px'
    
        if (pageScroll > lastPageScroll) {
            scrollDir = 'down';
        }
        else {
            scrollDir = 'up';
        }
        lastPageScroll = pageScroll;
        
        if (scrollDir === 'down'){
            if (pageScroll < destHight/4) {
                planeElement.style.transform = 'rotate(70deg)'
            }
            else {
                planeElement.style.transform = 'scale(-1, 1) rotate(70deg)'        
            }
        }
        else if (scrollDir === 'up') {
            if (pageScroll < destHight/4) {
                planeElement.style.transform = 'scale(-1, 1) rotate(0deg)'
            }
            else {
                planeElement.style.transform = 'rotate(0deg)'        
            }
        }
    }
})