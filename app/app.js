var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function(){
  //fires before the application runs
});

myNinjaApp.run(function(){
  //fires while the application runs
});

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
  //fires while the application runs
  $scope.message = "hey y'all";
  $scope.ninjas = ['yoshi', 'light', 'ryu', 'shaun'];

}]);
