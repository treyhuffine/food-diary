var app = angular.module("foodDiary", []);

app.controller("DiaryCtlr", function($scope, $http) {
  $scope.userList = [];
  $scope.user = {};

  $scope.saveUser = function() {
    $scope.currentUser = $scope.user;
    $scope.userList.push($scope.user);
  };
});
