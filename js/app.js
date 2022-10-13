
var app = angular.module('main', []);

app.controller('MainController', function MainController($scope) {
    let darkMode  = localStorage.getItem("dark-mode");
        
    function enableDarkMode() {
        document.documentElement.style.setProperty('--primary-color', '#1A1A1A');
        document.documentElement.style.setProperty('--off-color', '#FAFAFA');
        localStorage.setItem("dark-mode", "enabled");
    }
    
    function disableDarkMode() {
        document.documentElement.style.setProperty('--primary-color', '#FAFAFA');
        document.documentElement.style.setProperty('--off-color', '#1A1A1A');
        localStorage.setItem("dark-mode", "disabled");
    }

    if (darkMode === "enabled") {
        enableDarkMode(); 
    }
      
     $scope.toggleColormode = function() {
        darkMode = localStorage.getItem("dark-mode");
        if (darkMode === "disabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
    
});