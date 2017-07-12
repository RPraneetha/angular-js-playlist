var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider',function($routeProvider){
  //fires before the application runs
   $routeProvider
    .when('/home',{
      controller: 'NinjaController'
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

myNinjaApp.directive('randomNinja',[function(){
  return{
    restrict: 'E',
    scope: {
      ninjas: '=',
      title: '='
    },
    controller: function($scope){
      $scope.random = Math.floor(Math.random*4);
    }
  };
}]);

myNinjaApp.controller('NinjaController', ['$scope','$http', function($scope, $http){
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
  $http.get('data/ninjas.json').then(function(response){
    $scope.ninjas = response.data;
  });
}]);
