var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function(){
  //fires before the application runs
});

myNinjaApp.run(function(){
  //fires while the application runs
});

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
  //fires while the application runs
  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  }
  $scope.ninjas = [
    {
      name: 'Yoshi',
      belt: 'green',
      rate: 50,
      available: true
    },
    {
      name: 'Light',
      belt: 'yellow',
      rate: 30,
      available: true
    },
    {
      name: 'Ryu',
      belt: 'Orange',
      rate: 10,
      available: true
    },
    {
      name: 'Shaun',
      belt: 'Black',
      rate: 1000,
      available: false
    }
  ];

}]);
