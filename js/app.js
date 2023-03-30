
var app = angular.module('main', []);

app.controller('MainController', function MainController($scope) {
    $scope.xp = [
        {
            year: {no: 3, unit : 'years'},
            title: 'layout designer',
            company: 'amana waterpark corporation',
            isActive: false
        },
        {
            year: {no: 1, unit : 'year'},
            title: 'web developer',
            company: 'bitcapp blockchain technology',
            isActive: false
        },
        {
            year: {no: 2, unit : 'years'},
            title: 'front-end web dev',
            company: 'investa financial incorporation',
            isActive: true
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
            skills: 'Responsive',
            info: 'Build a fully responsive cross-device/cross-browser and pixel-perfect HTML prototype based on the visual mock-up.'
        },
        {
            skills: 'Frameworks and Libraries',
            info: 'Implement the desired front-end frameworks and libraries efficiently.'
        },
        {
            skills: 'API',
            info: 'Effectively manage, integrate, and modify APIs.'
        }
    ]

    $scope.animate = 0;
    $scope.animateMe = function(id) {
        
        var meAnim = { 
            'play': [ 
                function(){
                    tlRest.play();
                },
                function(){
                    tlSalute.play();
                },
                function(){
                    tlWave.play(1);
                },
                function(){
                    tlHandsup.play();
                },
            ],
            'reverse': [
                function(){
                    tlRest.reverse();
                },
                function(){
                   tlSalute.reverse();
                },
                function(){    
                    tlWave.reverse();
                    tlWave.pause();            
                },
                function(){
                  tlHandsup.reverse();                  
                },
            ]
        };
        meAnim.reverse[$scope.animate]();
        clearTimeout(setTimeout(meAnim.play[$scope.animate], 1000));
        setTimeout(meAnim.play[id], 1000);
        $scope.animate = id;
    }
    $scope.loadModel = function() {
        document.querySelector('#modelBox').classList.add('window--close')
        document.querySelector('#lazy-load').dismissPoster()
    };
    
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
    
    function init(){
        darkmode();
    }
    init();
});