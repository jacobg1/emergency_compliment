`use strict`;

(function(){
  var app = angular.module("emergencyComp");
  app.controller("emergencyCompController", EmergencyCompController);

  function EmergencyCompController(){
    var vm = this;
    var randomIndex = Math.floor(Math.random() * data.length)
    vm.data = data[randomIndex];
  }

}());
