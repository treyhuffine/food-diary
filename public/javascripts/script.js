var app = angular.module("foodDiary", []);

app.controller("DiaryCtlr", function($scope, $http, FoodCalculator) {
  $scope.userList = [];
  $scope.foodList =[];
  $scope.user = {};
  var calsPerPound = 3500;

  $scope.saveUser = function() {
    $http.post("/users", $scope.user)
      .success(function(data, status, headers, config) {
        $scope.currentUser = $scope.user;
        $scope.userList.push($scope.user);
      })
      .catch(function(err) {
        console.log(error);
      });
  };
  $scope.addFood = function() {
    $http.get("/food")
      .success(function(data) {
        console.log(data);
        $scope.food.date = new Date();
        $scope.food.editing = false;
        $scope.foodList.push($scope.food);
        $scope.food = {};
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
  $scope.saveFood = function(idx) {
    $http.post("/food")
    .success(function(data) {
      $scope.foodList[idx].editing = false;
    })
    .catch(function(data) {
      console.log(err);
    });
  };
  $scope.calcBMI = function() {
    return ($scope.currentUser ? FoodCalculator.calcBMI($scope.currentUser) : "");
  };
  $scope.weightGained = function() {
    return ($scope.currentUser ? FoodCalculator.weightGained($scope.foodList) : "");
  };
  $scope.currentWeight = function() {
    return ($scope.currentUser ? +$scope.currentUser.weight + Number($scope.weightGained()) : "");
  };
});
