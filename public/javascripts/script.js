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
    $scope.foodList.push($scope.food);
    $scope.food = {};
  };
});
