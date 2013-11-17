var app = angular.module("app", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('individual', {
            url: '/individual',
            templateUrl: 'templates/app.html'
        })
        .state('accommodation', {
            url: '/accommodation',
            templateUrl: 'templates/list.html',
            controller: 'ListCtrl'
        })
        .state('accommodation.item', {
            url: '/:item',
            templateUrl: 'templates/list.item.html',
            controller: function ($scope, $stateParams) {
                $scope.item = $stateParams.item;
                $scope.image = app.imageOf($stateParams.item);
            }
        })
})

app.imageOf = function (item) {
    return {
        'Milk': 'http://www.kremslehnerhotels.at/files/kremslehner-hotels/hotel-regina-kremslehner-vienna/2-rooms/superior/hotel-regina-superior-rooms-vienna.jpg',
        'Eggs': 'http://www.automation-drive.com/EX/05-14-08/Accommodation.jpg',
        'Bread': 'http://www.byron-bay.com.au/accommodation.JPG',
        'Cheese': 'http://www.settlersvillage.co.za/accommodation2b.jpg',
        'Ham': 'http://www.varianostravel.com/images/Phoenician_accommodation.jpg'
    }[item];
};

app.controller('ListCtrl', function ($scope) {
    $scope.shoppingList = [
        {name: 'Milk'},
        {name: 'Eggs'},
        {name: 'Bread'},
        {name: 'Cheese'},
        {name: 'Ham'}
    ];

    $scope.selectItem = function (selectedItem) {
        _($scope.shoppingList).each(function (item) {
            item.selected = false;
            if (selectedItem === item) {
                selectedItem.selected = true;
            }
        });
    };
})

