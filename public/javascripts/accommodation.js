var AccommodationUtil = {
        imageOf: function (item, scope) {
            var result = _.find(scope.accommodations, function (a) {
                return a.name == item
            });
            return _.isUndefined(result) ? '' : result.imageUrl
//    return {
//        'Milk': 'http://www.kremslehnerhotels.at/files/kremslehner-hotels/hotel-regina-kremslehner-vienna/2-rooms/superior/hotel-regina-superior-rooms-vienna.jpg',
//        'Eggs': 'http://www.automation-drive.com/EX/05-14-08/Accommodation.jpg',
//        'Bread': 'http://www.byron-bay.com.au/accommodation.JPG',
//        'Cheese': 'http://www.settlersvillage.co.za/accommodation2b.jpg',
//        'Ham': 'http://www.varianostravel.com/images/Phoenician_accommodation.jpg'
//    }[item];
        },

        accCtrl: function ($scope, Accommodation, resolvedprop) {
            $scope.contextUrl = resolvedprop.url
            var accommodationPromise = Accommodation.all();
            accommodationPromise.then(function (a) {
                $scope.accommodations = a;
            });

            $scope.selectItem = function (selectedItem) {
                _($scope.accommodations).each(function (item) {
                    item.selected = false;
                    if (selectedItem === item) {
                        selectedItem.selected = true;
                    }
                });
            };
        },


        buildingCtrl: function ($scope, $stateParams, Accommodation) {
            var accommodationPromise = Accommodation.all();
            accommodationPromise.then(function (a) {
                $scope.accommodations = a;
                $scope.item = $stateParams.item;
                $scope.image = AccommodationUtil.imageOf($stateParams.item, $scope);
            });
        }

}
