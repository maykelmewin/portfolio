gsap.registerPlugin(ScrollTrigger);

// second page slides
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

// last page trigger
ScrollTrigger.create({
    trigger: ".fold-last",
    start: "top bottom",
    toggleClass: {targets: ".infocard", className: "--expand"},
})
// main button
document.querySelector("#mainBtn").addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo: {y:".fold-first-content"} })
});

var pageDown = document.querySelectorAll(".--pagedown")
pageDown.forEach(function (el){  
    el.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo: {y:".fold-last"} })
    });
});

document.querySelector(".--pageup").addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo: {y:".fold-first"} })
});
// clouds parallax
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
// toggle aninamation
const switching = gsap.timeline();
switching.to('.toggle', {rotation:180, duration: '1'})
.to('.toggle__button', {y:20, duration: '1'}, "<")
switching.reversed(true);
function toggleAnimation(){
    switching.reversed(!switching.reversed());
}

// me falling animation
gsap.to(".me.--falling", {
    scrollTrigger: {
        trigger: ".fold-third",
        start: "top top",
        scrub: true
    },
    top: "300%"
});

// customize mouse pointer
var cursor = document.querySelector(".cursor"),
    follower =  document.querySelector(".cursor-follower");
var posX = 0,
    posY = 0;
var mouseX = 0,
    mouseY = 0;
TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    TweenMax.set(follower, {
        css: {    
        left: posX - 21,
        top: posY - 21
        }
    });
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
document.querySelectorAll(".focusmouse").forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        cursor.classList.add("active");
        follower.classList.add("active");
    });
});
document.querySelectorAll(".focusmouse").forEach((item) => {
    item.addEventListener('mouseleave', (e) => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
    });
});


//pinning me homepage
gsap.to(".me.--main", {
    scrollTrigger: {
        trigger: ".me.--main",
        toggleActions: "restart none none reverse",
        pin: true,
        start: "top 20%",
        end: () => (window.innerHeight - (window.innerHeight * .1)) + " 20%"
    },
});
//pinning me homepage
gsap.to(".hero-content__name", {
    scrollTrigger: {
        trigger: ".hero-content",
        start: "top top",
        scrub: true
    },
    scale: 10,
    yPercent: -1000
});

// me animations
var headRestX = '-50%',
headRestY = 0,
bodyRestX = '-50%',
bodyRestY = 0,
rhandRestX = 0 ,
rhandRestY = 0,
lhandRestX = 0,
lhandRestY = 0;

// salute
tlSalute =  gsap.timeline({ paused: true});
tlSalute.fromTo('.me__part.--head', {x: headRestX, y: headRestY}, {x: headRestX, y: headRestY , duration: '1'})
.fromTo('.me__part.--body' , {x: bodyRestX, y: bodyRestY}, {x: bodyRestX, y: bodyRestY , duration: '1'}, "<")
.fromTo('.me__part.--rhand', {x: rhandRestX, y: rhandRestY} ,{x: -12, y: rhandRestY, duration: '1'}, "<")
.fromTo('.me__part.--lhand', {x: lhandRestX, y: lhandRestY}  ,{x: 46, y: -38 , duration: '1'}, "<");

// handsup
tlHandsup = gsap.timeline({ paused: true});
tlHandsup.fromTo('.me__part.--head', {x: headRestX, y: headRestY} ,{x: headRestX, y: -10, duration: '1'})
.fromTo('.me__part.--body', {x: bodyRestX, y: bodyRestY} ,{x: bodyRestX, y: bodyRestY , duration: '1'}, "<")
.fromTo('.me__part.--rhand', {x: rhandRestX, y: rhandRestY} ,{x: 10, y: -160 , duration: '1'}, "<")
.fromTo('.me__part.--lhand', {x: lhandRestX, y: lhandRestY} ,{x: -10, y: -160 , duration: '1'}, "<");

// rest
tlRest = gsap.timeline({ paused: true});
tlRest.to('.me__part.--head' ,{x: headRestX, y: headRestY, duration: '1'})
.to('.me__part.--body' ,{x: bodyRestX, y: bodyRestY , duration: '1'}, "<")
.to('.me__part.--lhand' ,{x: lhandRestX, y: lhandRestY , duration: '1'}, "<")
.to('.me__part.--rhand' ,{x: rhandRestX, y: rhandRestY , duration: '1'}, "<");

// wave
tlWave = gsap.timeline({ paused: true});
tlWave.fromTo('.me__part.--head', {x: headRestX, y: headRestY,} ,{x: headRestX, y: headRestY, duration: '1'})
.fromTo('.me__part.--body', {x: bodyRestX, y: bodyRestY} ,{x: bodyRestX, y: bodyRestY , duration: '1'}, "<")
.fromTo('.me__part.--rhand', {x: lhandRestX, y: lhandRestY},{x: 60, y: -80}, "<" )
.to('.me__part.--rhand', {x: -20, y: -160, duration: '1',repeat: -1, yoyo: true}, "<" )
.fromTo('.me__part.--lhand', {x: lhandRestX, y: lhandRestY} ,{x: lhandRestX, y: lhandRestY , duration: '1'}, "<");
// tlWave.play();