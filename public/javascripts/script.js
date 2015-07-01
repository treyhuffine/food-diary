var app = angular.module("foodDiary", []);

app.controller("DiaryCtlr", function($scope, $http) {
  $scope.userList = [];
  $scope.foodList =[];
  $scope.user = {};

  $scope.saveUser = function() {
    $scope.currentUser = $scope.user;
    $scope.userList.push($scope.user);
  };
  $scope.addFood = function() {
    $scope.food.date = new Date();
    $scope.food.editing = false;
    $scope.foodList.push($scope.food);
    $scope.food = {};
  };
  $scope.deleteFood = function(idx) {
    $scope.foodList.splice(idx,1);
  };
  $scope.editFood = function(idx) {
    $scope.foodList[idx].editing = true;
  };
  $scope.saveFood = function(idx) {
    $scope.foodList[idx].editing = false;
  };
});
