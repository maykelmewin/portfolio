const MIN_WIDTH = 320;
const MIN_HEIGHT = 400;

// vh issue on mobile
function calculateVh(){
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');

    const w = window.innerWidth;
    const h = window.innerHeight;
    if (w < MIN_WIDTH || h < MIN_HEIGHT) {   
        document.querySelector('.screen-blocker').classList.add('--screen-limit');
        document.querySelector('.screen-blocker').classList.remove('--closed');
        document.body.style.overflow = 'hidden'; // block scroll    
    }else{
        document.querySelector('.screen-blocker').classList.remove('--screen-limit');  
        document.body.style.overflow = '';   
        if (document.readyState === "complete") {
            document.querySelector('.screen-blocker').classList.add('--closed');
        }
    }
}
window.addEventListener('resize', calculateVh);
window.addEventListener('orientationchange', calculateVh);

// after page loading
document.addEventListener('readystatechange', function(event) {

    
    calculateVh();
    pageReadyAnimation();
});


