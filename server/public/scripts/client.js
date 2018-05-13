console.log('Client is connected!');

const app = angular.module('PetHotelApp', ['ngRoute', 'ngMaterial']); 

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider 
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm'
    })
    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController as vm'
    })
    .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageController as vm'
    })
    .otherwise({
        template: `<h2>404</h2>`
    })
}]);