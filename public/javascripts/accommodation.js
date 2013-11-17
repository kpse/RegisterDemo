
app.imageOf = function (item) {
    return {
        'Milk': 'http://www.kremslehnerhotels.at/files/kremslehner-hotels/hotel-regina-kremslehner-vienna/2-rooms/superior/hotel-regina-superior-rooms-vienna.jpg',
        'Eggs': 'http://www.automation-drive.com/EX/05-14-08/Accommodation.jpg',
        'Bread': 'http://www.byron-bay.com.au/accommodation.JPG',
        'Cheese': 'http://www.settlersvillage.co.za/accommodation2b.jpg',
        'Ham': 'http://www.varianostravel.com/images/Phoenician_accommodation.jpg'
    }[item];
};

app.controller('AccommodationCtrl', function ($scope) {
    $scope.shoppingList = [
        {name: 'Milk', desc: '宿舍1'},
        {name: 'Eggs', desc: '宿舍2'},
        {name: 'Bread', desc: '宿舍3'},
        {name: 'Cheese', desc: '宿舍4'},
        {name: 'Ham', desc: '宿舍5'}
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

app.controller('SingleBuildingCtrl', function ($scope, $stateParams) {
    $scope.item = $stateParams.item;
    $scope.image = app.imageOf($stateParams.item);
})