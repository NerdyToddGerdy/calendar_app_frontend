console.log('events app.js');

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
this.url = "";

   this.getDomainName = function(){
      var myurl = "https://calendar-app-api.herokuapp.com";
      var currenturl = window.location.hostname;
      console.log(url + "" + myurl);
      if (myurl != currenturl) {
         this.url = "http://localhost:3000";
      } else {
         this.url = "https://calendar-app-api.herokuapp.com";
      }
   };
   // this.toggleRegionA = true;
   // this.toggleRegionB = true;
   // this.toggleRegionC = true;
   // this.toggleRegionD = true;
   this.showLoginModal = false;
   this.events = [];
   this.formdata = {};
   this.userEvents = [];
   this.addEventFormToggle = false;
   this.user_id=0;

   // this.openRegion = function(){
   // this.toggleRegionA = !this.toggleRegionA;
   $http({
      method:"GET",
      url: this.url + '/events'
   }).then(function(response){
      console.log(response.data);
      this.events = response.data;
   }.bind(this));
   // };

   $http({
      method: "GET",
      url: this.url + '/user_events'
   }).then(function(response){
      console.log('get user events ',response.data);
      this.userEvents = response.data;
      // for (var i = 0; i < response.data.length; i++) {
      //    console.log(response.data[i]);
      // }
      console.log('user events ' + this.userEvents);
   }.bind(this));


   $http({
      method: "GET",
      url: this.url + '/user_events'
   }).then(function(response){
      console.log(response);
      console.log(response.data);
      this.userEvents = response.data;
      // for (var i = 0; i < response.data.length; i++) {
      //    console.log(response.data[i]);
      // }
      console.log('user events ',this.userEvents);
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

   this.resetUsersEvents = function(){
      console.log(this.events);
      console.log('resetUsersEvents');
      this.events = [];
      $('.event-list').on('click', function(){
         $(this).toggleClass('selected');
      });
      console.log(this.events);
      $http({
         method:"GET",
         url: this.url + '/events'
      }).then(function(response){
         console.log(response.data);
         this.events = response.data;
      }.bind(this));
      console.log(this.events);
   };
      this.showLoginModal = false;
      this.loginForm = true;
      this.regForm = false;
      controller = this;
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
         // console.log(this.events);
         this.myEvent = event;
         var theirArray = controller.events;
         var answerArr = [];
         for (var i = 0; i < theirArray.length; i++) {
            // console.log(this.myEvent.date, "===", theirArray[i].date);

            // if my events date is same as data in system.... show only matching dates
            if (this.myEvent.date == theirArray[i].date){
               answerArr.push(theirArray[i]);
            }
         }
         // console.log(answerArr, '*********');
         this.events = answerArr;
         // console.log(this.events, '%%%%%%%%%%%%%%%%%%%%');
      }.bind(this);


// ___________________USER EVENTS CRUD_______________________________________
      this.toggleUserEventForm = function(data){
         console.log('toggleUserEventForm ');
      };
// ********************************************************//
      this.toggleUpdateUserEventForm = function(data){
         console.log('toggleUpdateUserEvent ');
      };

// ********************************************************//
    this.testFireFunction = function(){
       //console.log('test Fire Function ');
       this.currentUserId = localStorage.getItem("my_events_user_id");
       console.log('test Fire Function ', this.currentUserId );
    };

// ********************************************************// this.formdata
      this.createUserEvent = function(currentUser){
        this.currentUserId = localStorage.getItem("my_events_user_id");
        console.log('click submit event');
        console.log(localStorage.getItem("my_events_user_id"));
         $http({
            method: 'POST',
            url: this.url + '/user_events' ,
            headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
            },
            data: {
               user_event_name: this.formdata.user_event_name,
               date: this.formdata.date,
               category: this.formdata.category,
               user_id: parseInt(this.currentUserId),
               start_time: this.formdata.start_time,
               end_time: this.formdata.end_time,
            }
         }).then(function(result){
            console.log("submitEventForm: ", result);

            // add user event refresh
          }.bind(this));
       };

// ********************************************************//
      this.updateUserEvent = function(user_event, event){
        console.log('updateUserEvent function . . .' , user_event, event.id);
         $http({
            method: 'PUT',
            url: this.url + '/user_events/' + event.id,
            headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
            },
            data: {
               user_event_name: user_event.user_event_name,
               date: user_event.date,
               category: user_event.category,
               user_id: user_event.user_id,
               start_time: user_event.start_time,
               end_time: user_event.end_time
            },
          }).then(function(result) {
             console.log('update user data from server: ', result);
          }.bind(this));
       };
  // ********************************************************//
      this.deleteUserEvent = function(thisEvent){
        console.log('delete user id ', thisEvent.id);
         $http({
            method:'DELETE',
            url: this.url + '/user_events/' + thisEvent.id,
            headers: {
              Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
              },
         }).then(function(result){
            console.log("Deleted data to our server: ", result);

            // refreash events
        }.bind(this));
      };

  // ********************************************************//

 this.getDomainName();
}]);
