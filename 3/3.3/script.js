// Code goes here

var app = angular.module("myApp", []);

app.controller("MainController", function($scope) {
  
  var person = {
    firstName: "Chris",
    lastName: "Webb",
    imageSrc: "https://deanwebbdeveloper.com/images/face.png"
  };
  
  $scope.message = "Hello, Angular!";
  $scope.person = person;
  
});