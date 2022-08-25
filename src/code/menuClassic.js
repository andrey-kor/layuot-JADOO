const headerListElement = document.querySelector('.header__list');
const burgerElement = document.querySelector('.menu-burger');

export default function menuClassic() {

    function clickListener (event) {
        const pageName = event.target.lastElementChild.dataset.pageId;
        if(pageName) {
            window.scroll(0, document.querySelector(`#${pageName}-page`).getBoundingClientRect().top);
        } 
    }

    if (getComputedStyle(burgerElement).display === 'none'){        
        headerListElement.addEventListener('click', clickListener)
    }
}