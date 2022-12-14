export default function slideAutoChoose() {

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
    }, 3000);

}