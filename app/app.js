'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ui.router',
  'ngMaterial',
  'ngRoute',
  'myApp.version'
]);

myApp.config(function ($stateProvider, $urlRouterProvider) {


  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home/home.html"
      })    
      .state('careers',{
        url: "/careers",
        templateUrl:"career/career.html"
      })
      .state('blog',{
        url:"/blog",
        templateUrl:"blog/blog.html"
      })
      .state('contact',{
        url:"/contact",
        templateUrl:"contact/contact.html"
      })
});


//Setting the theme for the whole website
myApp.config(function ($mdThemingProvider) {
    var customPrimary = {
        '50': '#ffffff',
        '100': '#212121',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#ffffff',
        '500': '#ffffff',
        '600': '#f2f2f2',
        '700': '#e6e6e6',
        '800': '#d9d9d9',
        '900': '#cccccc',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#bfbfbf'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
            customPrimary);

    var customAccent = {
        '50': '#0033ab',
        '100': '#003bc4',
        '200': '#0043de',
        '300': '#004bf7',
        '400': '#1259ff',
        '500': '#2b6bff',
        '600': '#447cff',
        '700': '#78a1ff',
        '800': '#91b2ff',
        '900': '#abc4ff',
        'A100': '#447cff',
        'A200': '#447cff',
        'A400': '#2b6bff',
        'A700': '#c4d6ff'
    };
    $mdThemingProvider
        .definePalette('customAccent',
            customAccent);

    var customWarn = {
        '50': '#ffb280',
        '100': '#ffa266',
        '200': '#ff934d',
        '300': '#ff8333',
        '400': '#ff741a',
        '500': '#ff6400',
        '600': '#e65a00',
        '700': '#cc5000',
        '800': '#b34600',
        '900': '#993c00',
        'A100': '#ffc199',
        'A200': '#ffd1b3',
        'A400': '#ffe0cc',
        'A700': '#803200'
    };
    $mdThemingProvider
        .definePalette('customWarn',
            customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#ffffff',
        '500': '#ffffff',
        '600': '#f2f2f2',
        '700': '#e6e6e6',
        '800': '#d9d9d9',
        '900': '#cccccc',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#bfbfbf'
    };
    $mdThemingProvider
        .definePalette('customBackground',
            customBackground);

    $mdThemingProvider.theme('default')
        .primaryPalette('customPrimary')
        .accentPalette('customAccent')
        .warnPalette('customWarn')
        .backgroundPalette('customBackground')
});

myApp.run(function($rootScope, $window, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    //Listening to change in state to change the active tab
    $rootScope.$on( "$stateChangeStart", function(event, next, current) {
        
        //Changing the active tab according to the state
        var states = ['home', 'careers', 'blog', 'contact'];
        $rootScope.selectedTab = states.indexOf(next.name);

    });

    //abTest variable is set for the first time when they visit the website. abTest is used in home.html for abTesting
    $rootScope.abTest = $window.localStorage.getItem('abTest');
    if ($rootScope.abTest) {
        return
    }else{
        var randomNumber = Math.floor(Math.random()*2);
        if(randomNumber){
            $window.localStorage.setItem('abTest', 1);
        }else{
            $window.localStorage.setItem('abTest', 0);
        }
        $rootScope.abTest = $window.localStorage.getItem('abTest');
    }
});

myApp.controller('MainCtrl',['$state', '$stateParams', '$scope', '$rootScope', function ($state, $stateParams, $scope, $rootScope) {

    //To home when logo is clicked
    $scope.goToHome = function () {
        $state.go('home');              //Going to home state
    };
}]);