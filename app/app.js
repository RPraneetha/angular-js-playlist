var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider',function($routeProvider){
  //fires before the application runs
   $routeProvider
    .when('/home',{
      templateUrl: 'views/home.html',
      controller: 'NinjaController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
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
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);

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

  $scope.removeAll = function() {
    $scope.ninjas = [];
  }
  $http.get('data/ninjas.json').then(function(response){
    $scope.ninjas = response.data;
  });
}]);
