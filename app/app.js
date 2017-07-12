var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider',function($routeProvider){
  //fires before the application runs
   $routeProvider
    .when('/home',{
      templateUrl: 'views/home.html'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'NinjaController'
    }).otherwise({
      redirectTo: '/home'
    });
}]);

myNinjaApp.run(function(){
  //fires while the application runs
});

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
  //fires while the application runs
  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  };

  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    });
    $scope.newninja.name = "";
    $scope.newninja.rate = "";
    $scope.newninja.belt = "";
  };

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
