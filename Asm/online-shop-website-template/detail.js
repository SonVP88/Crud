var app = angular.module("Son", []);
app.controller("Son-ctrl", function ($scope, $http) {
    $http.get("https://63ec4a2732a081172398cb72.mockapi.io/ph27983/giay_dep?skip=0&limit=10")
        .then(function (response) {
            //Lấy dữ liệu
            var data = response.data;
            //Truyền lên giao diện
            $scope.products = data;
        });

    $scope.getProduct = function (id) {
        $http.get("https://63ec4a2732a081172398cb72.mockapi.io/ph27983/giay_dep/" + id)
            .then(function (response) {
                //Lấy dữ liệu
                var data = response.data;
                //Truyền lên giao diện
                $scope.selectedProduct = data;
            });
    };
});