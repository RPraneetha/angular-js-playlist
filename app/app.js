var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function(){
  //fires before the application runs
});

myNinjaApp.run(function(){
  //fires while the application runs
});

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
  //fires while the application runs
  $scope.ninjas = [
    {
      name: 'Yoshi',
      belt: 'green',
      rate: 50
    },
    {
      name: 'Light',
      belt: 'yellow',
      rate: 30
    },
    {
      name: 'Ryu',
      belt: 'Orange',
      rate: 10
    },
    {
      name: 'Shaun',
      belt: 'Black',
      rate: 1000
    }
  ];

}]);
