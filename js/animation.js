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

// const falling = gsap.from(".content__title", {
//     scale: 5,
//     ease: "none",
//     duration: .2
// });


// ScrollTrigger.create({
//     animation: falling,
//     trigger: ".fold-third",
//     scrub: true,
// });
