// Code goes here

var app = angular.module("myApp", []);

app.controller("MainController", function($scope, $http) {
  
  var onUserComplete = function(response) {
    $scope.user = response.data;
  };
  
  var onError = function(reason) {
    $scope.error = "Could not fetch the user";
  }
  
  $http.get("https://api.github.com/users/robconery")
    .then(onUserComplete, onError)
  
  $scope.message = "Hello, Angular!";
  
});