


var myApp = angular.module('myApp', [
  'ngRoute',
  'appNSControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
 
    when('/about', {
    templateUrl: './partials/about.html',
    
  }).
   when('/services', {
    templateUrl: './partials/services.html',
    
  }).
  when('/instrumentation', {
    templateUrl: './partials/instrumentation.html',
    
  }).
  when('/sell', {
    templateUrl: './partials/selection.html',
    
  }).
  when('/contact', {
    templateUrl: './partials/contact.html',
    
  }).
  when('/userInfo', {
    templateUrl: './partials/userInfo.html',
    
  }).
  otherwise({
    redirectTo: '/about'
  });
}]);


