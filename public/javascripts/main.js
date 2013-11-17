var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<div>welcome to student registration</div>'
        })
        .when('/pizza', {
            template: '<div class="button" pizza>Click me!</div>'
        })
        .when('/:message', {
            templateUrl: 'app.html',
            controller: 'AppCtrl'
        })
        .otherwise({
            template: '404'
        })
})

app.controller("AppCtrl", function ($scope, $routeParams) {
    $scope.model = {
        message: "this is my app! " + $routeParams.message
    }
})



app.directive("pizza", function () {
    return function (scope, element) {
        element.bind("click", function () {
            alert("clicked!");
        })
    }
})