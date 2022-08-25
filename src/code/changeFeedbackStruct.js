export default function changeFeedbackStruct() {
    const feedbackPageStyle = getComputedStyle(document.querySelector('.feedback-page'));

    // This works if widht < 960px
    if (feedbackPageStyle.display === 'block' ) {
        const slideButtonsElement = document.querySelector('.feedback-page__button-wrapper');
        document.querySelector('.feedback-page__slide-column').prepend(slideButtonsElement);
    }
}