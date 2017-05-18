console.log('app.js');

var app = angular.module('EventApp',[]);

app.controller('MainController', ['$http', function($http){
   this.toggleRegionA = false;
   this.showLoginModal = false;
   this.loginForm = true;
   this.regForm = false;
   var controller = this;
   this.showLoginForm = function(){
      console.log('login form');
      this.loginForm = true;
      this.regForm = false;
   };
   this.showRegForm = function(){
      console.log('Registration form');
      this.loginForm = false;
      this.regForm = true;
   };
   // $http({
   //    method:"GET",
   //    url: 'http://localhost:3000/users'
   // }).then(function(response){
   //    console.log(response);
   // });
}]);
