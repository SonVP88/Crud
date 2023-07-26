var app = angular.module("Son", []);
app.controller("Son-ctrl", function ($scope, $http) {
    $http.get("https://63ec4a2732a081172398cb72.mockapi.io/ph27983/giay_dep/?limit=8&page=1")
    // $http.get("https://63ec4a2732a081172398cb72.mockapi.io/ph27983/giay_dep")
        .then(function (response) {
            //Lấy dữ liệu
            var data = response.data;
            //Truyền lên giao diện
            $scope.products = data;
        });
        //Tìm theo id
        $scope.getProduct =function(id){
            $http.get("https://63ec4a2732a081172398cb72.mockapi.io/ph27983/giay_dep/" + id)
                .then(function(response){
                    $scope.selectedProduct =response.data;
                });
        };
        
        //tìm kiếm
        $scope.search = function () {
            var Name = document.getElementById("NameText").value;
            console.log(Name)
            $http.get("https://63ec4a2732a081172398cb72.mockapi.io/ph27983/giay_dep?Name=" + Name)
                .then(function (response) {
                    //lấy dữ liệu
                    var data = response.data;
                    //truyền lên giao diện
                    console.log(data)
                    $scope.products = data;
                });
        }

});
