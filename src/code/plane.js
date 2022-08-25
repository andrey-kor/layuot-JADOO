export default function plane() {
    // The plane is visible when 600px < width < 1060px

    const planeElement = document.querySelector('.flying-plane');
    const destBlockElement = document.querySelector('.dest-block');
    let lastPageScroll = 0;
    let scrollDir;

    window.addEventListener('scroll', () => {

        const destTopPosition = window.pageYOffset + destBlockElement.getBoundingClientRect().top;
        const destBottomPosition = window.pageYOffset + destBlockElement.getBoundingClientRect().bottom;
        const destHight = destBottomPosition-destTopPosition;
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        let pageScroll = scrollY - destTopPosition;
        
        if (pageScroll > 0 && pageScroll < destHight) {

            const kH = pageScroll / clientHeight; // 0...1

            planeElement.style.top = pageScroll + (clientHeight * kH) + (100 * (1-kH)) + 'px';
            planeElement.style.left = ((-(Math.abs((pageScroll/(destHight/4))-1))+1)*clientWidth) + 'px'

            // Oter decision
            // if ( x <= destHight/2){
            //     planeElement.style.left = ((2*clientWidth)/destHight) *  x + 'px'
            // }
            // else {
            //     planeElement.style.left = 2*clientWidth * (1-(x/destHight)) + 'px'
            // }
        
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

}