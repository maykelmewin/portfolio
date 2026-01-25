
var app = angular.module('main', []);

app.controller('MainController', function MainController($scope, $timeout, $window, SoundService) {

    $scope.SoundService = SoundService;
    $scope.fxOnToggle = function(){   
        $scope.playClickSound();
        SoundService.toggleFx();
    }
    $scope.link = {
        li : 'https://www.linkedin.com/in/michael-merin/',
        ig : 'https://www.instagram.com/mklmerin/',
        messenger : 'https://m.me/maykelmewin',
        figma : 'https://www.figma.com/design/Rki4DLFlw70sHLa1lexVdV/Porfolio---Merin?m=auto&t=qSUdqfA6sbQezQ6F-6',
    }
    $scope.isDetailHovered = false; 
    $scope.xp = [
        {
            year: {no: 4, unit : 'years'},
            title: 'front-end web dev',
            company: 'investa financial incorporation',
            description: 'Main Front-End Developer responsible for supporting Investa’s web applications, creating landing pages, and defining overall page structure and design.',
            datespan: 'JUN 2021 - AUG 2025',
            link: 'https://www.investagrams.com/',
            isActive: false
        },
        {
            year: {no: 1, unit : 'year'},
            title: 'web developer',
            company: 'bitcapp blockchain technology',
            description: 'Developed, enhanced, and managed responsive web applications for diverse needs.',
            datespan: 'FEB 2021 - JUN 2021',
            link: null,
            isActive: false
        },
        {
            year: {no: 3, unit : 'years'},
            title: 'layout designer',
            company: 'amana waterpark corporation',
            description: 'from a working student to a full-time employee, creating visually appealing designs and layouts.',
            datespan: 'MAR 2017 - AUG 2020',
            link: 'https://www.facebook.com/amanawaterparkph/',
            isActive: false
        },
    ]
    
    $scope.desc = [
        {
            desc: 'he.',
            popupContent: "Being a man has taught me patience, responsibility, and resilience—qualities I bring into front-end development. They help me tackle challenges head-on, adapt to new situations, and ensure every line of code and design element gets the attention it deserves, creating websites that are both functional and user-friendly.",
            // isVoiceActive: false
        },
        {
            desc: 'Filipino.',
            popupContent: "The way we approach work and design reflects who we are and what we value. I carry my Filipino culture as an asset and make sure it helps build collaboration, not barriers. I strongly believe in the Filipino saying, “Bawat detalye, mahalaga.",
            // isVoiceActive: false
        },
        {
            desc: 'proficient in English.',
            popupContent: "Two are better than one—and even better with a whole team. But a team without communication is like a group chat where no one responds. I make sure I communicate clearly and connect with every team member. Using English at work comes naturally to me.",
            // isVoiceActive: false
        },
        {
            desc: 'two decade into existence.',
            popupContent: "I’ve been in the industry for almost a decade, building strong expertise in what I do. Learning and adapting to new technologies is a natural part of my work.",
            // isVoiceActive: false
        },
        {
            desc: 'obsessed with art and codes.',
            popupContent: "I’m not perfect, but I am a perfectionist. I pay attention to every detail in design. I know how hard the process of creating a design can be, and I know how to handle every inch of it well.",
            // isVoiceActive: false
        },
        {
            desc: 'highly interested in turning outstanding design into website.',
            popupContent: "I worked as a Layout artist as my first job. Being an engineer to someone's work is hard. and I know what to consider. don't worry communication is the key!",
            // isVoiceActive: false
        },
       
    ]

    $scope.openPopups = [];
    $scope.activePopups = null;

    // open popup by index
    $scope.openPopup = function(index) {
        $scope.playClickSound();
        const el = document.querySelector(`.popup-container`);
        if (el) {
            el.classList.add('--open');
        }

        
        $scope.activePopups = index;        
        SoundService.playPopup(index);

        if ($scope.openPopups.includes(index)) return;
        $scope.openPopups.push(index);


    };

    // close popup by stack index
    $scope.closePopup = function(stackIndex, popupIndex) {
        $scope.playClickSound();
        const el = document.querySelector(`.popup-container .popup:nth-child(${stackIndex + 1})`);
        if (el) {
            gsap.to(el, { width: 0, opacity: .5, duration: .8, onComplete: () => {
                $scope.$apply(() => {
                    $scope.openPopups.splice(stackIndex, 1);
                });
            }});
        } else {
            // fallback
            $scope.openPopups.splice(stackIndex, 1);
        }
        if( $scope.activePopups == popupIndex){            
            $scope.activePopups = null;
            SoundService.stopPopup();
        }
    };
    $scope.$on('popupSoundEnded', function () {
        $scope.activePopups = null;
    });

    // $scope.$watch('activePopups', function(newVal) {
    //     // Reset all flags first
    //     $scope.desc.forEach(item => {
    //         item.isVoiceActive = false;
    //     });
    //     // If null → nothing active
    //     if (newVal === null || newVal === undefined) return;

    //     // Activate only the selected index
    //     if ($scope.desc[newVal]) {
    //         $scope.desc[newVal].isVoiceActive = true;
    //     }
    // });

    $scope.$watchCollection('openPopups', function(newVal, oldVal) {
        if (newVal.length > oldVal.length) {
            $timeout(() => {
                const el = document.querySelector(`.popup-container .popup:last-child`);
                if (el) { gsap.from(el, { width: 0, opacity: 0, duration: 0.4 }); }
            });
        }
    });

    // close all on scroll
    let scrollCloseTicking = false;
    angular.element(window).on('scroll', function () {
        
        // prevent running multiple times per frame
        if (scrollCloseTicking) return;
        scrollCloseTicking = true;
        requestAnimationFrame(() => {            
            if ($scope.openPopups.length > 0) {
                if($scope.activePopups !== null) {                    
                    $scope.activePopups = null;
                    SoundService.stopPopup();
                }
                const el = document.querySelector(`.popup-container`);
                if (el) {
                    el.classList.remove('--open');
                }
            }
            scrollCloseTicking = false;
            
        });
    });

    // sounds    
    $scope.playClickSound = function() {
        SoundService.playClick();
    }
    

    $scope.expertise = [
        {
            skills: 'Technologies & Tools',
            info: 'Proficient in essential technologies and highly adaptable to new skill demands.'
        },     
        {
            skills: 'Responsive Design',
            info: 'Build a fully responsive cross-device/cross-browser and pixel-perfect HTML prototype based on the visual mock-up.'
        },   
        {
            skills: 'API & Frameworks',
            info: 'Effectively manage, integrate, and modify APIs and Implement the desired front-end frameworks and libraries.'
        },
    ]

    $scope.techSkill = [
        {
            text: 'Advance CSS SASS/SCSS',
            percent: 100,
        },
        {
            text: 'Tailwind',
            percent: 90,
        },
        {
            text: 'Vanila JS',
            percent: 100,
        },
        {
            text: 'Vue, React, Angular',
            percent: 80,
        },
        {
            text: 'GSAP',
            percent: 75,
        },
        {
            text: 'Three JS',
            percent: 45,
        },
        {
            text: 'Figma',
            percent: 90,
        },
        {
            text: 'Adobe XD & Photoshop',
            percent: 90,
        },
        {
            text: 'Sketchup',
            percent: 30,
        },
    ]

    $scope.AnimateSkillProgressHoverIn = function(i){
        const el = document.getElementById(`techSkillItemFiller${i}`);        
        el.style.left = $scope.techSkill[i].percent + '%';
        let width = 100 - $scope.techSkill[i].percent; // reverse the value;
        el.style.width = width + '%';
    };

    $scope.AnimateSkillProgressHoverOut = function(i){
        const el = document.getElementById(`techSkillItemFiller${i}`);        
        el.style.left = 0;
        el.style.width = $scope.techSkill[i].percent + '%';
    };

    // Experience Accordion 
    $scope.OpenExperienceAccordion = null;
    $scope.toggleExperienceAccordion = function(i){
        $scope.playClickSound();
        if ($scope.OpenExperienceAccordion === i) {
            $scope.OpenExperienceAccordion = null;
        } else {
            $scope.OpenExperienceAccordion = i;
        }
    };


    //timeout
    $timeout(function () {
        const box = document.querySelector('.responsive-design-box');
        if (!box) return;
    
        // flag used to ignore observer updates
        $scope.ignoreResize = false;
    
        // function you can call to change width without triggering observer logic
        $scope.setBoxWidth = function(width) {
            $scope.playClickSound();
            $scope.ignoreResize = true; // ignore next observer event
            box.style.width = width + 'px';
    
            $scope.boxWidth = width;
            // clear flag after small delay
            $timeout(function () {
                $scope.ignoreResize = false;
            });
        };
    
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
    
                // skip observer update if flagged
                if ($scope.ignoreResize) return;
    
                const w = entry.contentRect.width;
                const h = entry.contentRect.height;
        
                $scope.boxWidth = w;
                $scope.boxHeight = h;
                $scope.$applyAsync();
            }
        });
    
        observer.observe(box);

        //tex progressbar input initial data
        techSkillProgressInitValue();
        
        animateFocusMouse();
    }, 0);


    // breakpoints
    function updateBreakpoints() {
        const w = $window.innerWidth;

        if (w >= 768) {
            $scope.breakpoints = 1; // large
        } else if (w >= 568) {
            $scope.breakpoints = 2; // medium
        } else {
            $scope.breakpoints = 3; // small
        }
    }

    updateBreakpoints();

    angular.element($window).on('resize', function () {
        $scope.$applyAsync(updateBreakpoints);
    });
    
    //endbrekpoints


    // $scope.animate = 0;
    // $scope.animateMe = function(id) {
        
    //     var meAnim = { 
    //         'play': [ 
    //             function(){
    //                 tlRest.play();
    //             },
    //             function(){
    //                 tlSalute.play();
    //             },
    //             function(){
    //                 tlWave.play(1);
    //             },
    //             function(){
    //                 tlHandsup.play();
    //             },
    //         ],
    //         'reverse': [
    //             function(){
    //                 tlRest.reverse();
    //             },
    //             function(){
    //                tlSalute.reverse();
    //             },
    //             function(){    
    //                 tlWave.reverse();
    //                 tlWave.pause();            
    //             },
    //             function(){
    //               tlHandsup.reverse();                  
    //             },
    //         ]
    //     };
    //     meAnim.reverse[$scope.animate]();
    //     clearTimeout(setTimeout(meAnim.play[$scope.animate], 1000));
    //     setTimeout(meAnim.play[id], 1000);
    //     $scope.animate = id;
    // }
    // $scope.loadModel = function() {
    //     document.querySelector('#modelBox').classList.add('window--close')
    //     document.querySelector('#lazy-load').dismissPoster()
    // };
    
    function observeColorMode() {
        const target = document.documentElement;

        const observer = new MutationObserver(() => {
            const isDark = target.classList.contains('dark');
            window.applyThreeColorMode(isDark);
        });

        observer.observe(target, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    function enableDarkMode() {
        document.documentElement.classList.add('dark');
        document.documentElement.style.setProperty('--primary-color', '#1A1A1A');
        document.documentElement.style.setProperty('--off-color', '#e5e5e5');
        document.getElementsByClassName('infocard')[0].classList.add('--inverted');
        localStorage.setItem("dark-mode", "enabled");
    }

    function disableDarkMode() {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.setProperty('--primary-color', '#e5e5e5');
        document.documentElement.style.setProperty('--off-color', '#1A1A1A');
        document.getElementsByClassName('infocard')[0].classList.remove('--inverted');
        localStorage.setItem("dark-mode", "disabled");
    }

    (function initColorMode() {
         const saved = localStorage.getItem("dark-mode");

            if (saved === "enabled") {
                enableDarkMode();   // adds .dark to documentElement
            } else {
                disableDarkMode();  // ensures .dark is removed
            }

            // optional: sync Three.js immediately
            const isDark = document.documentElement.classList.contains('dark');
            window.applyThreeColorMode(isDark);
    })();

    $scope.toggleColormode = function() {
        $scope.playClickSound();
        toggleAnimation();

        const isDark = document.documentElement.classList.contains('dark');

        if (isDark) {
            disableDarkMode();   // updates DOM + localStorage
        } else {
            enableDarkMode();    // updates DOM + localStorage
        }
    };

    // function darkmode(){
    //     let darkMode  = localStorage.getItem("dark-mode");
    //     if (darkMode === "enabled") {
    //         enableDarkMode(); 
    //     }
    //     function enableDarkMode() {
    //         document.documentElement.style.setProperty('--primary-color', '#1A1A1A');
    //         document.documentElement.style.setProperty('--off-color', '#e5e5e5');
    //         document.getElementsByClassName('infocard')[0].classList.add('--inverted');
    //         localStorage.setItem("dark-mode", "enabled");
    //     }
        
    //     function disableDarkMode() {
    //         document.documentElement.style.setProperty('--primary-color', '#e5e5e5');
    //         document.documentElement.style.setProperty('--off-color', '#1A1A1A');
    //         document.getElementsByClassName('infocard')[0].classList.remove('--inverted');
    //         localStorage.setItem("dark-mode", "disabled");
    //     }
        
    //     $scope.toggleColormode = function() {
    //         darkMode = localStorage.getItem("dark-mode");
    //         toggleAnimation();
    //         if (darkMode === "enabled") {
    //             disableDarkMode();
    //             window.applyThreeColorMode(false);
    //         } else {
    //             enableDarkMode();
    //             window.applyThreeColorMode(true);
    //         }
    //     }
    // } 

    function techSkillProgressInitValue(){
        for (let i = 0; i < $scope.techSkill.length; i++) {
            const el = document.getElementById(`techSkillItemFiller${i}`);
            if (!el) continue;            
            el.style.width = $scope.techSkill[i].percent + '%';
        }
    }

    const meSpace = document.querySelector(".me-space");
    let meVisible = false;

    // Observe visibility
    const meObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            meVisible = entry.isIntersecting;
        });
    }, { threshold: 0 });

    meObserver.observe(meSpace);
    
    function mainMeAnimate(){ 
        if (meVisible){
            tlWave.play(0);
        }
    }
    
    function mainMeStopAnimate(){    
        if (meVisible){            
            tlWave.pause();
            tlWaveReset.play(0);
        }
    }

    // listener for mouse and scroll   
    let idleDelay = 1000; 
    let idlePromise = null;
    let isIdle = false;     // track idle state

    function startIdleTimer() {
        idlePromise = $timeout(function() {
            if (!isIdle) {
                isIdle = true;
                $scope.onIdle();
            }
        }, idleDelay);
    }

    function resetIdleTimer() {
        // Cancel old timer
        if (idlePromise) $timeout.cancel(idlePromise);

        // If user was idle, and now moved → call onActive once
        if (isIdle) {
            isIdle = false;
            $scope.onActive();
        }

        // Restart timer
        startIdleTimer();
    }

    // Trigger when idle once
    $scope.onIdle = function() {
        mainMeStopAnimate();
    };

    // Trigger when active again once
    $scope.onActive = function() {
        mainMeAnimate();
    };

    // Start timer
    startIdleTimer();

    // Track movement or scroll
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('scroll', resetIdleTimer);


    function init(){
        // darkmode();
        mainMeAnimate();
        tlWave.play(0);
        observeColorMode();
    }
    init();
});

// app.controller('QuoteController', ['$http', function($http) {
//     var vm = this;
//     vm.quote = '';
//     vm.author = '';

//     vm.loadRandomQuote = function() {
//         $http.get('https://thingproxy.freeboard.io/fetch/https://zenquotes.io/api/random')
//             .then(function(response) {
//                 console.log('API Response:', response);
//                 vm.quote = response.data[0].q; // Get the quote
//                 vm.author = response.data[0].a; // Get the author
//             })
//             .catch(function(error) {
//                 console.error('Error fetching quote:', error);
//             });
//     };

//     // Load a quote on initialization
//     vm.loadRandomQuote();
    

// }]);

app.controller('CryptoController', function($scope, $http) {
    $scope.prices = null;
    $scope.loading = false;
    $scope.error = false;
    $scope.started = false;
    $scope.lastUpdated = null;

    $scope.loadPrices = function() {
      $scope.playClickSound();
      $scope.loading = true;
      $scope.error = false;

      var url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,ripple&vs_currencies=usd&include_24hr_change=true";

      $http.get(url).then(function(response) {
        $scope.prices = response.data;
        $scope.loading = false;
        $scope.started = true; // switch button text to "Refresh"
        $scope.lastUpdated = new Date().toLocaleString();
      }, function(error) {
        console.error("Error fetching data:", error);
        $scope.error = true;
        $scope.loading = false;
      });
    };
  });


// autotyping
app.controller('AutoTypingCtrl', function($timeout, SoundService) {
    var vm = this;

    const DEFAULT = "3D Animation";
    const MAX_LENGTH = 30; // <-- maximum letters allowed
    let idleTimer = null;
    let deleting = false;
    vm.el = null;

    // Wait until DOM is ready
    $timeout(function() {
        vm.el = document.getElementById('typingTitle');
        vm.el.innerText = DEFAULT.slice(0, MAX_LENGTH); // initialize default text
    }, 0);

    // ---------------------------
    // Handle user typing
    // ---------------------------
    vm.onUserType = function() {
        SoundService.playType();
        if (!vm.el) return; // safety check
        
        // limit user typing
        if (vm.el.innerText.length > MAX_LENGTH) {
            vm.el.innerText = vm.el.innerText.slice(0, MAX_LENGTH);
            placeCaretAtEnd(vm.el);
        }

        // cancel any previous idle timer
        if (idleTimer) $timeout.cancel(idleTimer);
        deleting = false;

        // start idle timer
        idleTimer = $timeout(startDeleteIfIdle, 2000); // 2 seconds
    };

    // ---------------------------
    // Delete incorrect letters after idle
    // ---------------------------
    function startDeleteIfIdle() {
        deleting = true;
        deleteStep();
    }

    function deleteStep() {
        if (!deleting) return;

        let txt = vm.el.innerText;

        // compute longest correct prefix
        let prefix = "";
        for (let i = 0; i < txt.length && i < DEFAULT.length; i++) {
            if (txt[i] === DEFAULT[i]) prefix += txt[i];
            else break;
        }

        // if only prefix remains, stop deleting & type the rest
        if (txt === prefix) {
            deleting = false;
            typeDefault(prefix);
            return;
        }

        // otherwise delete one letter at a time
        vm.el.innerText = txt.slice(0, -1);
        placeCaretAtEnd(vm.el);
        $timeout(deleteStep, 250);  
    }

    // ---------------------------
    // Auto-type default text from prefix
    // ---------------------------
    function typeDefault(prefix) {
        let i = prefix.length;

        function addLetter() {
            if (i > DEFAULT.length - 1) return;
            SoundService.playType();
            vm.el.innerText = DEFAULT.slice(0, i + 1);
            i++;

            $timeout(addLetter, 500);
        }

        addLetter();
    }

    function placeCaretAtEnd(el) {
        var range = document.createRange();
        var sel = window.getSelection();
        range.selectNodeContents(el);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }
});

app.factory('SoundService', function($rootScope) {
    
    const clickSound = new Audio('/sounds/type.wav');
    clickSound.volume = 0.4; // 0 to 1
    clickSound.preload = 'auto';
    
    const typeSound = new Audio('/sounds/click.wav');
    typeSound.volume = 0.1; // 0 to 1
    typeSound.preload = 'auto';   

    const popupSounds = {
        0: new Audio('/sounds/1.mp3'),
        1: new Audio('/sounds/2.mp3'),
        2: new Audio('/sounds/3.mp3'),
        3: new Audio('/sounds/4.mp3'),
        4: new Audio('/sounds/5.mp3'),
        5: new Audio('/sounds/6.mp3'),
    };
    Object.values(popupSounds).forEach(audio => {
        audio.preload = 'auto';
        audio.volume = 0.8;
    });

    let currentPopupAudio = null;

    const ServiceSound = {
        fxOn: true,
        toggleFx,
        playClick,
        playType,
        playPopup,
        stopPopup
    };


    function playType(){
        if(!ServiceSound.fxOn) return;
        clickSound.currentTime = 0; // rewind so it can replay fast
        clickSound.play().catch(() => {});     
    }

    function playClick(){
        if(!ServiceSound.fxOn) return;
        typeSound.currentTime = 0; // rewind so it can replay fast
        typeSound.play().catch(() => {});     
    }

    function playPopup(index) {
        if (!ServiceSound.fxOn) return;
        if (!(index in popupSounds)) return;

        // Stop current audio
        stopPopup();

        currentPopupAudio = popupSounds[index];
        currentPopupAudio.currentTime = 0;
        currentPopupAudio.play().catch(() => {});

        // Auto stop when finished
        currentPopupAudio.onended = function () {
            $rootScope.$applyAsync(() => {
                stopPopup();
                $rootScope.$broadcast('popupSoundEnded');
            });
        };
    }

    function stopPopup() {
        if (!currentPopupAudio) return;

        currentPopupAudio.pause();
        currentPopupAudio.currentTime = 0;
        currentPopupAudio.onended = null;
        currentPopupAudio = null;
    }

    function toggleFx() {
        ServiceSound.fxOn = !ServiceSound.fxOn;

        if (!ServiceSound.fxOn) {
            stopPopup(); // stop all sounds immediately
        }
    }

    return ServiceSound;
});