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
      var weightGain = $scope.caloriesToWeight() / calsPerPound;
      return weightGain;
    }
    else {
      return "";
    }
  };
  $scope.caloriesToWeight = function() {
    var totalCals = $scope.foodList.reduce(function(prev, curr) {
      return Number(prev) + Number(curr.calories) * Number(curr.servings);
    }, 0);
    return totalCals;
  };
  $scope.currentWeight = function() {
    if ($scope.currentUser) {
      return Number($scope.currentUser.weight) + Number($scope.weightGained());
    }
    else {
      return "";
    }
  };
});
