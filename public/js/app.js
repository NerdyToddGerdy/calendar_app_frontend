console.log('app.js');

var app = angular.module('EventApp',[]);

app.controller('MainController', ['$http', function($http){
   this.toggleRegionA = false;
   this.showLoginModal = true;
   // $http({
   //    method:"GET",
   //    url: 'http://localhost:3000/users'
   // }).then(function(response){
   //    console.log(response);
   // });
}]);
