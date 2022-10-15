gsap.registerPlugin(ScrollTrigger);

const slides = gsap.to(".slides", {
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