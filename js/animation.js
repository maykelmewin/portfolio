gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);


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
    gsap.to(window, {duration: 1, scrollTo: {y: gsap.getProperty(".fold-first-content", "offsetTop") + 4} })
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


// clouds parallax
// function pageReadyAnimation() {
//     const foldThird = document.querySelector(".fold-third");
//     let isVisible = false;

//     // Observe visibility
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             isVisible = entry.isIntersecting;

//             if (isVisible) {
                
//                 const falling = gsap.timeline();
//                 falling.fromTo('.--a0', {yPercent: -1000}, {yPercent: 1000, duration: 2})
//                        .fromTo('.--a1', {yPercent: -1000}, {yPercent: 1000, duration: 2}, "<")
//                        .fromTo('.--a2', {yPercent: -3000}, {yPercent: 0, duration: 2}, "<")
//                        .fromTo('.--b0', {yPercent: -1000}, {yPercent: 1000, duration: 2}, "<")
//                        .fromTo('.--b1', {yPercent: -1000}, {yPercent: 1000, duration: 2}, "<")
//                        .fromTo('.--b2', {yPercent: -1000}, {yPercent: 1000, duration: 2}, "<")
//                        .fromTo('.--b3', {yPercent: 0}, {yPercent: 0, duration: 2}, "<")
//                        .fromTo('.--b4', {yPercent: 0}, {yPercent: -1000, duration: 2}, "<");

//                 ScrollTrigger.create({
//                     animation: falling,
//                     trigger: ".fold-third",
//                     end: () => "+=" + foldThird.offsetWidth,
//                     scrub: true
//                 });

//             } 
//         });
//     }, { threshold: 0 });

//     observer.observe(foldThird);
// }

function pageReadyAnimation() {
  const foldThird = document.querySelector(".fold-third");
  if (!foldThird) return;

  const layers = [
    { el: '.--a0', from: -600, to: 600 },
    { el: '.--a1', from: -700, to: 700 },
    { el: '.--a2', from: -900, to: 0 },
    { el: '.--b0', from: -500, to: 500 },
    { el: '.--b1', from: -600, to: 600 },
    { el: '.--b2', from: -700, to: 700 },
    { el: '.--b3', from: 0, to: 0 },
    { el: '.--b4', from: 0, to: -800 }
  ];

  layers.forEach(layer => {
    const el = document.querySelector(layer.el);
    if (!el) return;

    gsap.fromTo(el,
      { yPercent: layer.from },
      {
        yPercent: layer.to,
        ease: "none",
        scrollTrigger: {
          trigger: foldThird,
          start: getStartParallaxTrigger(),
          end: () => "+=" + foldThird.offsetWidth,
          scrub: 0.6, 
        }
      }
    );
  });
}
function getStartParallaxTrigger() {
  return window.innerWidth < 768
    ? "center bottom"     // mobile → start earlier
    : "top bottom"; // desktop → normal
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
        scrub: 0.5,
    },
    top: "300%"
});

const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (isTouchDevice) {
    document.documentElement.classList.add('is-touch');
} else{
    document.documentElement.classList.remove('is-touch');    
    initCursor();
}

function initCursor() {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");
  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    follower.style.left = (posX - 21) + 'px';
    follower.style.top = (posY - 21) + 'px';

    requestAnimationFrame(animate);
  }

  animate();
}

function animateFocusMouse(){
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");
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
}

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
// tlSalute =  gsap.timeline({ paused: true});
// tlSalute.fromTo('.me__part.--head', {x: headRestX, y: headRestY}, {x: headRestX, y: headRestY , duration: '1'})
// .fromTo('.me__part.--body' , {x: bodyRestX, y: bodyRestY}, {x: bodyRestX, y: bodyRestY , duration: '1'}, "<")
// .fromTo('.me__part.--rhand', {x: rhandRestX, y: rhandRestY} ,{x: -12, y: rhandRestY, duration: '1'}, "<")
// .fromTo('.me__part.--lhand', {x: lhandRestX, y: lhandRestY}  ,{x: 46, y: -38 , duration: '1'}, "<");

// handsup
// tlHandsup = gsap.timeline({ paused: true});
// tlHandsup.fromTo('.me__part.--head', {x: headRestX, y: headRestY} ,{x: headRestX, y: -10, duration: '1'})
// .fromTo('.me__part.--body', {x: bodyRestX, y: bodyRestY} ,{x: bodyRestX, y: bodyRestY , duration: '1'}, "<")
// .fromTo('.me__part.--rhand', {x: rhandRestX, y: rhandRestY} ,{x: 10, y: -160 , duration: '1'}, "<")
// .fromTo('.me__part.--lhand', {x: lhandRestX, y: lhandRestY} ,{x: -10, y: -160 , duration: '1'}, "<");

// rest
// tlRest = gsap.timeline({ paused: true});
// tlRest.to('.me__part.--head' ,{x: headRestX, y: headRestY, duration: '1'})
// .to('.me__part.--body' ,{x: bodyRestX, y: bodyRestY , duration: '1'}, "<")
// .to('.me__part.--lhand' ,{x: lhandRestX, y: lhandRestY , duration: '1'}, "<")
// .to('.me__part.--rhand' ,{x: rhandRestX, y: rhandRestY , duration: '1'}, "<");

// wave
tlWave = gsap.timeline({ paused: true});
tlWave.fromTo('.me.--main .me__part.--head', 
    {x: headRestX, y: headRestY, rotation: 0} ,
    {x: headRestX, y: headRestY, rotation: -8, duration: '.3'})
.fromTo('.me__part.--body', 
    {x: bodyRestX, y: bodyRestY} ,
    {x: bodyRestX, y: bodyRestY , duration: '1'}, "<")
.fromTo('.me.--main .me__part.--rhand', {x: lhandRestX, y: lhandRestY},{x: 60, y: -80, duration: '1'}, "<" )
.to('.me.--main .me__part.--rhand', {x: -20, y: -160, duration: '1',repeat: -1, yoyo: true} )
.fromTo('.me.--main .me__part.--lhand', {x: lhandRestX, y: lhandRestY} ,{x: lhandRestX, y: lhandRestY , duration: '1'}, "<");

tlWaveReset = gsap.timeline({ paused: true});
tlWaveReset.to('.me.--main .me__part.--rhand', {x: lhandRestX, y: lhandRestY})
.fromTo('.me.--main .me__part.--head', 
    {x: headRestX, y: headRestY, rotation: -8} ,
    {x: headRestX, y: headRestY, rotation: 0, duration: '.3'}, "<");


// dragable responsive container
const responsiveDesignBox = document.getElementById('responsiveDesignBox');
const responsiveDesignHandle = document.getElementById('responsiveDesignHandle');
const minWidth = 300;
let maxWidth = Math.min(window.innerWidth, 1048);

let isDragging = false;
let startWidth, startX;

window.addEventListener('resize', () => {
    maxWidth = Math.min(window.innerWidth, 1048);
});

// POINTER DOWN (mouse + touch + pen)
responsiveDesignHandle.addEventListener('pointerdown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startWidth = responsiveDesignBox.offsetWidth;

    document.body.style.cursor = 'ew-resize';

    // prevent touch scroll
    e.preventDefault();
});

// POINTER MOVE
window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    let newWidth = startWidth + dx;

    if (newWidth < minWidth) newWidth = minWidth;
    if (newWidth > maxWidth) newWidth = maxWidth;

    responsiveDesignBox.style.width = newWidth + 'px';
});

// POINTER UP
window.addEventListener('pointerup', () => {
    if (isDragging) {
        isDragging = false;
        document.body.style.cursor = 'default';
    }
});


// floating section
gsap.to(".fold-threeJs", {
    height: "100%",    
    ease: "none",   
    scrollTrigger: {
      trigger: ".fold-threeJS-floor",
      start: "bottom bottom",     
      end: "+=300",          
      scrub: true,
      pin: ".fold-threeJS-floor", 
      pinSpacing: true, 
      anticipatePin: 1
    }
  });


//   cube rotation

// -----------------------------------------
// DARK MODE COLOR UPDATE FROM app.js


// --- THREE.js scene setup ---
const PRIMARY_COLOR = 0x1A1A1A;  // light surface
const OFF_COLOR     = 0xE5E5E5 ;  // dark surface

// --- THREE.js scene setup ---
let scene, camera, renderer, material;
scene = new THREE.Scene();
scene.background = new THREE.Color(PRIMARY_COLOR);

camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;

const threeContainer = document.getElementById("three-container");
threeContainer.appendChild(renderer.domElement);

// --- MATERIAL ---
material = new THREE.MeshBasicMaterial({ color: OFF_COLOR });

// --- CREATE CHARACTER ---
const character = new THREE.Group();
const head = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), material);
head.position.set(0,1.4,0);
const body = new THREE.Mesh(new THREE.BoxGeometry(0.4,1.6,0.4), material);
body.position.set(0,-0.2,0);
const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.4,0.4), material);
leftHand.position.set(-0.8,-0.4,0);
const rightHand = leftHand.clone();
rightHand.position.x = 0.8;
character.add(head, body, leftHand, rightHand);
scene.add(character);

// --- DARK MODE SWITCH ---
window.applyThreeColorMode = function(isDark) {
    scene.background.set(isDark ? OFF_COLOR : PRIMARY_COLOR);
    material.color.setHex(isDark ? PRIMARY_COLOR : OFF_COLOR);
    material.needsUpdate = true;
};
const isDark = document.documentElement.classList.contains('dark');
window.applyThreeColorMode(isDark);

// --- RENDER LOOP ---
let threeVisible = true; // track visibility
function animate() {
    if (threeVisible) {
        renderer.render(scene, camera);
    }
    requestAnimationFrame(animate);
}
animate();

// --- IntersectionObserver to stop Three.js when offscreen ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        threeVisible = entry.isIntersecting; // true if visible
    });
    
}, { threshold: 0 }); // threshold 0 = even 1px visible counts

observer.observe(document.querySelector(".fold-threeJS-floor"));
// -----------------------------------------
// GSAP SCROLL ANIMATION
// -----------------------------------------
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".fold-threeJS-floor",
        start: "bottom bottom",
        end: "+=600",
        scrub: true,
        // pin: ".fold-threeJS-floor",
        // pinSpacing: true,
        // anticipatePin: 1,
        // markers: true
    }
});

// 1️⃣ grow height
tl.to(".fold-threeJs", {
    height: "100%",
    ease: "none",
    duration: 1
});

// 2️⃣ character rotate
tl.to(character.rotation, {
    x: Math.PI * 2,
    y: Math.PI * 2,
    ease: "none",
    duration: 1
});