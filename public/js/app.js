console.log('app.js');

var app = angular.module('EventApp',[]);
this.events=[];
this.userEvents=[];

app.controller('MainController', ['$http', function($http){
   this.openRegion = function(){
      // this.toggleRegionA = !this.toggleRegionA;
      $http({
         method:"GET",
         url: 'http://localhost:3000/events'
      }).then(function(response){
         console.log(response.data);
         this.events = response.data;
      }.bind(this));
   };

      $http({
         method: "GET",
         url: 'http://localhost:3000/user_events'
      }).then(function(response){
         console.log(response.data);
         this.userEvents = response.data;
      }.bind(this));
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


}]);
