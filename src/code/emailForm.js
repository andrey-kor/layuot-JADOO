export default function emailForm() {

    const inputElement = document.querySelector('.subscribe-form__input');
    const placeholderElement = document.querySelector('.subscribe-form__placeholder');
    const messageElement = document.querySelector('.subscribe-form__message');

    inputElement.addEventListener('focus', () => {
        if (placeholderElement.classList.contains('subscribe-form__placeholder_visible')){
            placeholderElement.classList.remove('subscribe-form__placeholder_visible');
        }
    });

    inputElement.addEventListener('blur', () => {
        const value = inputElement.value;
        if (!value) {
            placeholderElement.classList.add('subscribe-form__placeholder_visible');
        }

        emailValidate(value);
    })

    inputElement.addEventListener('input', () => {
        const value = inputElement.value;
        if (messageElement.classList.contains('subscribe-form__message_visible')){
            emailValidate(value);
        }
    })

    function emailValidate(value) {
        const pattern = /^\w[\w._+-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if (pattern.test(value)) {
            if (messageElement.classList.contains('subscribe-form__message_visible')){
                messageElement.classList.remove('subscribe-form__message_visible');
            }
        }
        else {
            messageElement.classList.add('subscribe-form__message_visible');
        }
    }
}