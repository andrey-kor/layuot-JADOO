const headerListElement = document.querySelector('.header__list');
const burgerElement = document.querySelector('.menu-burger');

export default function menuClassic() {

    function clickListener (event) {
        const blockName = event.target.lastElementChild.dataset.blockId;
        if(blockName) {
            window.scroll(0, document.querySelector(`#${blockName}-block`).getBoundingClientRect().top);
        } 
    }

    if (getComputedStyle(burgerElement).display === 'none'){        
        headerListElement.addEventListener('click', clickListener)
    }
}