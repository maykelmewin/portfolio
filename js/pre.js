function calculateVh(){
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}
calculateVh();
window.addEventListener('resize', calculateVh);
window.addEventListener('orientationchange', calculateVh);

document.addEventListener('readystatechange', function(event) {
    if (document.readyState === "complete") {
        document.querySelector('.loading-screen').classList.add('--closed');
    }
});