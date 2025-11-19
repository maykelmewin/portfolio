
var app = angular.module('main', []);

app.controller('MainController', function MainController($scope, $timeout, $window) {

    
    //observe the reponsive-box if change
    $timeout(function () {
        const box = document.querySelector('.responsive-design-box');
        if (!box) return;
    
        // flag used to ignore observer updates
        $scope.ignoreResize = false;
    
        // function you can call to change width without triggering observer logic
        $scope.setBoxWidth = function(width) {
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
            desc: 'He',
        },
        {
            desc: 'Filipino',
        },
        {
            desc: 'Proficient in English',
        },
        {
            desc: 'Two decades of existence',
        },
        {
            desc: 'Obsessed with art and codes',
        },
        {
            desc: 'Greatest interest in turning outstanding design into a website',
        },
       
    ]

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
            skills: 'API, Frameworks and Libraries',
            info: 'Effectively manage, integrate, and modify APIs and Implement the desired front-end frameworks and libraries.'
        }
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
            percent: 75,
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
       
        if ($scope.OpenExperienceAccordion === i) {
            $scope.OpenExperienceAccordion = null;
        } else {
            $scope.OpenExperienceAccordion = i;
        }
    };
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
    
    

    function darkmode(){
        let darkMode  = localStorage.getItem("dark-mode");
        if (darkMode === "enabled") {
            enableDarkMode(); 
        }
        function enableDarkMode() {
            document.documentElement.style.setProperty('--primary-color', '#1A1A1A');
            document.documentElement.style.setProperty('--off-color', '#e5e5e5');
            document.getElementsByClassName('infocard')[0].classList.add('--inverted');
            localStorage.setItem("dark-mode", "enabled");
        }
        
        function disableDarkMode() {
            document.documentElement.style.setProperty('--primary-color', '#e5e5e5');
            document.documentElement.style.setProperty('--off-color', '#1A1A1A');
            document.getElementsByClassName('infocard')[0].classList.remove('--inverted');
            localStorage.setItem("dark-mode", "disabled");
        }
        
        $scope.toggleColormode = function() {
            darkMode = localStorage.getItem("dark-mode");
            toggleAnimation();
            if (darkMode === "enabled") {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        }
    } 

    function techSkillProgressInitValue(){
        for (let i = 0; i < $scope.techSkill.length; i++) {
            const el = document.getElementById(`techSkillItemFiller${i}`);
            if (!el) continue;            
            el.style.width = $scope.techSkill[i].percent + '%';
        }
    }


    function mainMeAnimate(){ 
        tlWave.play(0);
    }
    
    function mainMeStopAnimate(){    
        tlWave.pause();
        tlWaveReset.play(0);
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
        darkmode();
        mainMeAnimate();
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