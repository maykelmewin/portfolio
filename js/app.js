
var app = angular.module('main', []);

app.controller('MainController', function MainController($scope) {
    
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
            document.documentElement.style.setProperty('--primary-color', '#FAFAFA');
            document.documentElement.style.setProperty('--off-color', '#e5e5e5');
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