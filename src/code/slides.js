const slidesArr = document.querySelectorAll('.feedback__slide-wrapper');
let pos = 0;

export default function slides() {

    changeActiveButton(0);

    document.querySelector('.feedback-page').addEventListener('click', (event) => {
    
        if (event.target.closest('.slide-arrow-up')){
            pos = 1;
            movePos(pos);
        }
        else if (event.target.closest('.slide-arrow-down')){
            pos = -1;
            movePos(pos);
        }
        else if (event.target.closest('.feedback-page__button-wrapper')){
            const buttonTargetElem = event.target.lastChild || event.target;
            console.log(buttonTargetElem);
            const buttonId = buttonTargetElem.id[buttonTargetElem.id.length-1];
            moveSlide(buttonId);
        }
        else return;
    })
}

function changeActiveButton(activeId){
    const buttonArr = document.querySelectorAll('.slide-button');

    buttonArr.forEach((button) => {
        if (button.classList.contains('slide-button_active')) button.classList.remove('slide-button_active');
    })
    buttonArr[activeId].classList.add('slide-button_active');
}

function moveSlide(activeSlide){

    slidesArr.forEach((item) => {
        if (item.classList.contains('slide_visible')) item.classList.remove('slide_visible');
        if (item.classList.contains('slide_back')) item.classList.remove('slide_back');
        if (item.classList.contains('slide_up')) item.classList.remove('slide_up');
    })
    
    let nextSlideIndex;
    if (+activeSlide === slidesArr.length - 1) nextSlideIndex = 0;
    else nextSlideIndex = +activeSlide + 1;

    let prevSlideIndex;
    if(+activeSlide === 0) prevSlideIndex = slidesArr.length - 1;
    else prevSlideIndex = +activeSlide - 1;
    
    slidesArr[+activeSlide].classList.add('slide_visible');
    slidesArr[nextSlideIndex].classList.add('slide_back');
    slidesArr[prevSlideIndex].classList.add('slide_up');

    changeActiveButton(+activeSlide);
}

function movePos(pos) {
    let activeSlideIndex = function() {
        let id = 0;
        slidesArr.forEach((slide, index) => {
            if (slide.classList.contains('slide_visible')) id = index;
        })
        return id;
    }();    

    if (pos > 0){
        if (activeSlideIndex === slidesArr.length - 1) activeSlideIndex = 0;
        else activeSlideIndex += pos;
    }
    else if(pos < 0){
        if (activeSlideIndex === 0) activeSlideIndex = slidesArr.length - 1;
        else activeSlideIndex += pos;
    }

    moveSlide(activeSlideIndex);
}