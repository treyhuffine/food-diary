var app = angular.module("foodDiary", []);

app.controller("DiaryCtlr", function($scope, $http) {
  $scope.userList = [];
  $scope.foodList =[];
  $scope.user = {};
  var calsPerPound = 3500;

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
  $scope.calcBMI = function() {
    if ($scope.currentUser) {
      var BMI = Number($scope.currentUser.weight) * 703 / (Number($scope.currentUser.height) * Number($scope.currentUser.height));
      return BMI;
    }
    else {
      return "";
    }
  };
  $scope.weightGained = function() {
    if ($scope.currentUser) {
      var calsPerPound * $scope.currentUser.;
      return BMI;
    }
    else {
      return "";
    }
  };
  $scope.caloriesToWeight = function() {
    $scope.foodList.forEach(f: fn(elt: ?, i: number), context?: ?)
  }
});
