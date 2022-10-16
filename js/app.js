
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
    function darkmode(){
        let darkMode  = localStorage.getItem("dark-mode");
        if (darkMode === "enabled") {
            enableDarkMode(); 
        }
        function enableDarkMode() {
            document.documentElement.style.setProperty('--primary-color', '#1A1A1A');
            document.documentElement.style.setProperty('--off-color', '#e5e5e5');
            localStorage.setItem("dark-mode", "enabled");
        }
        
        function disableDarkMode() {
            document.documentElement.style.setProperty('--primary-color', '#e5e5e5');
            document.documentElement.style.setProperty('--off-color', '#1A1A1A');
            localStorage.setItem("dark-mode", "disabled");
        }
        
        $scope.toggleColormode = function() {
            darkMode = localStorage.getItem("dark-mode");
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