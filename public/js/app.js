console.log('app.js');
$(function(){
   $('.region_button').on('click',function(){
      $(this).toggleClass('this-region');
      console.log('it works');
   });
   $('.event-list').on('click', function(){
      $(this).toggleClass('selected');
   });
});
var app = angular.module('EventApp',[]);
this.events=[];
this.userEvents=[];
this.showUserEvents = true;


app.controller('MainController', ['$http', function($http){
   // this.toggleRegionA = true;
   // this.toggleRegionB = true;
   // this.toggleRegionC = true;
   // this.toggleRegionD = true;
   this.showLoginModal = true;
   this.events = [];
   this.formdata = {};
   this.userEvents = [];

   // this.openRegion = function(){
   // this.toggleRegionA = !this.toggleRegionA;
   $http({
      method:"GET",
      url: 'http://localhost:3000/events'
   }).then(function(response){
      console.log(response.data);
      this.events = response.data;
   }.bind(this));
   // };

   $http({
      method: "GET",
      url: 'http://localhost:3000/user_events'
   }).then(function(response){
      console.log(response.data);
      this.userEvents = response.data;
      // for (var i = 0; i < response.data.length; i++) {
      //    console.log(response.data[i]);
      // }
      console.log(this.userEvents);
   }.bind(this));


   $http({
      method: "GET",
      url: 'http://localhost:3000/user_events'
   }).then(function(response){
      console.log(response);
      console.log(response.data);
      this.userEvents = response.data;
      // for (var i = 0; i < response.data.length; i++) {
      //    console.log(response.data[i]);
      // }
      console.log(this.userEvents);
   }.bind(this));
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

   this.clickOneEvent = function(event){
      // this.openRegion();
      this.resetUsersEvents = function(){
         console.log(this.events);
         this.events = [];
         $('.event-list').on('click', function(){
            $(this).toggleClass('selected');
         });
         console.log(this.events);
         $http({
            method:"GET",
            url: 'http://localhost:3000/events'
         }).then(function(response){
            console.log(response.data);
            this.events = response.data;
         }.bind(this));
         console.log(this.events);
      };
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
      this.myEvent={};
      this.clickOneEvent = function(event){
         // this.openRegion();
         var controller = this;
         console.log('clicking an event: ', event);
         console.log(this.events);
         this.myEvent = event;
         var theirArray = controller.events;
         var answerArr = [];
         for (var i = 0; i < theirArray.length; i++) {
            console.log(this.myEvent.date, "===", theirArray[i].date);

            // if my events date is same as data in system.... show only matching dates
            if (this.myEvent.date == theirArray[i].date){
               answerArr.push(theirArray[i]);
            }
         }
         console.log(answerArr, '*********');
         this.events = answerArr;
         console.log(this.events, '%%%%%%%%%%%%%%%%%%%%');


      }.bind(this);
      // ___________________USER EVENTS CRUD_______________________________________


      this.toggleUserEventForm = function(data){
         console.log(data);
      };

      this.toggleUpdateUserEventForm = function(data){
         console.log(data);
      };

// ********************************************************//
      this.submitEventForm = function(){
         $http({
            method: 'POST',
            url: 'http://localhost:3000/user_events' ,
            data: this.formdata
         }).then(function(result){
            console.log("submitEventForm: ", result);
         });
         console.log(this.formdata);
      };

// ********************************************************//

      this.submitUpdateEventForm = function(){
         $http({
            method: 'PUT',
            url: 'http://localhost:3000/user_events',
            data: this.formdata
         }).then(function(result){
            console.log("Updated data to our server: ", result);
         });
         console.log(this.formdata);
      };


      this.removeEvent = function(){
         $http({
            method:'DELETE',
            url: 'http://localhost:3000/user_events'
         }).then(function(result){
            console.log("Deleted data to our server: ", result);
         });
      };
   };



}]);
