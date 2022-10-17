gsap.registerPlugin(ScrollTrigger);

const  slides = gsap.to(".slides", {
    xPercent: -200,
    ease: "none",
    duration: .2
});

ScrollTrigger.create({
    animation: slides,
    trigger: ".fold-second",
    start: "top top",
    scrub: true,
    pin: true,
    snap: 1 / 2,
    end: () => "+=" + document.querySelector(".slides").offsetWidth
});

ScrollTrigger.create({
    trigger: ".fold-last",
    start: "top bottom",
    toggleClass: {targets: ".infocard", className: "--expand"},
})


document.querySelectorAll(".pagination__item").forEach((btn, index, array) => {
    btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#phase" + (index + 1)}});
    });
    
    ScrollTrigger.create({
        trigger: "#phase" + (index + 1) ,
        start: index == array.length - 1 ? "top bottom" : "top bottom",
        end: index == array.length - 1 ? "bottom" : "bottom bottom",
        toggleClass: {targets: '#btnPhase' + (index + 1), className: '--active'}
    });
});

function pageReadyAnimation(){
   const falling = gsap.timeline();
    falling.fromTo('.--a0', {yPercent: -1000}, {yPercent: 1000, duration: '2'})
    .fromTo('.--a1', {yPercent: -1000}, { yPercent: 1000, duration: '2'}, "<")
    .fromTo('.--a2', {yPercent: -3000}, {yPercent: 0, duration: '2'}, "<")
    .fromTo('.--b0', {yPercent: -1000}, { yPercent: 1000, duration: '2'}, "<")
    .fromTo('.--b1', {yPercent: -1000}, { yPercent: 1000, duration: '2'}, "<")
    .fromTo('.--b2', {yPercent: -1000}, { yPercent: 1000, duration: '2'}, "<")
    .fromTo('.--b3', {yPercent: 0}, { yPercent: 0, duration: '2'}, "<")
    .fromTo('.--b4', {yPercent: 0}, { yPercent: -1000, duration: '2'}, "<")

    ScrollTrigger.create({
        animation: falling,
        trigger: ".fold-third",
        end: () => "+=" + document.querySelector(".fold-third").offsetWidth,
        scrub: true,
    });

}
gsap.to(".me.--falling", {
    scrollTrigger: {
        trigger: ".fold-third",
        start: "top top",
        scrub: true
    },
    top: "300%"
});