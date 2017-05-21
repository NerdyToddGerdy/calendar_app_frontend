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
   }]);
