var app = angular.module("addrBook", []);
app.controller("myCtrl", function ($scope, $http) {
    $scope.info = [];
    $http.get("/users/phonebook")
        .success(function (response) {
            $scope.info = response;
        });

    function update() {
        $http.put("/users/phonebook", { data: $scope.info })
            .success(function () {
            })
            .error(function () {
                alert("an error occurred while saving...")
            })
    }

    $scope.addMe = function () {
        return {
            name: $scope.newName,
            tel: $scope.newTel
        }
    }
    $scope.addItem = function () {
        for (var i = 0; i < $scope.info.length; i++) {
            if (($scope.info[i].name == $scope.addMe().name) ||
                ($scope.info[i].tel == $scope.addMe().tel)) {
                alert("name or telphone number was repeated");
                return false;
            }
        }
        $scope.info.push($scope.addMe());
        update();
    }

    $scope.removeItem = function () {
        $scope.info.splice(this.$index, 1)
        update();
    }
    $scope.change = function () {
        index = this.$index;
        $scope.showMe = function (indx) {
            if (indx == index) {
                return true;
            }
        }
    }
    $scope.save = function () {
        index = this.$index;
        $scope.showMe = function (indx) {
            if (indx == index) {
                return false;
            }
        }
        update()
    }
})