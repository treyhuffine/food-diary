var app = angular.module("foodDiary", []);

app.controller("DiaryCtlr", function($scope, $http, FoodCalculator) {
  $scope.userList = [];
  $scope.foodList = [];
  $scope.user = {};
  var calsPerPound = 3500;

  $scope.saveUser = function() {
    $http.post("/users", $scope.user)
      .success(function(data, status, headers, config) {
        $scope.currentUser = data;
        $scope.userList.push($scope.currentUser);
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  $scope.getFood = function() {
    $http.get("/food", $scope.currentUser)
      .success(function(data) {
        $scope.foodList.push(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  $scope.deleteFood = function(idx) {
    $http.delete("/food/" + idx)
      .success(function(data) {
        $scope.foodList.splice(idx,1);
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  $scope.editFood = function(idx) {
    $http.put("/food/" + idx)
      .success(function(data) {
        $scope.foodList[idx].editing = true;
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  $scope.addFood = function() {
    $scope.food.uid = $scope.currentUser.uid;
    $scope.food.editing = false;
    $scope.food.date = new Date();
    $http.post("/food", $scope.food)
      .success(function(data) {
        if (data) {
          $scope.foodList.push(data);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  $scope.calcBMI = function() {
    return ($scope.currentUser ? FoodCalculator.calcBMI($scope.currentUser) : "");
  };
  $scope.weightGained = function() {
    return ($scope.currentUser && $scope.foodList.length > 0 ? FoodCalculator.weightGained($scope.foodList) : "");
  };
  $scope.currentWeight = function() {
    return ($scope.currentUser && $scope.foodList.length > 0 ? +$scope.currentUser.weight + Number($scope.weightGained()) : "");
  };
});
