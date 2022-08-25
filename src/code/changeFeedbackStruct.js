export default function changeFeedbackStruct() {
    const feedbackBlockStyle = getComputedStyle(document.querySelector('.feedback-block'));

    // This works if widht < 960px
    if (feedbackBlockStyle.display === 'block' ) {
        const slideButtonsElement = document.querySelector('.feedback-block__button-wrapper');
        document.querySelector('.feedback-block__slide-column').prepend(slideButtonsElement);
    }
}