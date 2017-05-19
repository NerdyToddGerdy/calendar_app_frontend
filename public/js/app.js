console.log('app.js');

var app = angular.module('EventApp',[]);
this.events=[];
this.userEvents=[];
this.showUserEvents = true;

app.controller('MainController', ['$http', function($http){
   this.toggleRegionA = false;
   this.showLoginModal = true;
   this.events = [];
   this.formdata = {};
   this.userEvents = [];

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
      // for (var i = 0; i < response.data.length; i++) {
      //    console.log(response.data[i]);
      // }
      console.log(this.userEvents);
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











 //Adding crud stuff;
// function ctrl.addUserEventForm(){
//        console.log('hello world');
//    }
//    this.addUserEventForm = addUserEventForm;
//        $http({
//            method: 'POST',
//            url: 'http://localhost:3000/user_events',
//            data: this.formdata
//        }).then(function(result){
//            console.log("Data from our server: ", result);
//        });
//    }




   this.clickOneEvent = function(event){
      // this.openRegion();
      var controller = this;
      console.log('clicking an event: ', event);
      console.log(this.events);
      var myEvent = event;
      var theirArray = controller.events;
      var answerArr = [];
      for (var i = 0; i < theirArray.length; i++) {
         console.log(myEvent.date, "===", theirArray[i].date);

         // if my events date is same as data in system.... show only matching dates
         if (myEvent.date == theirArray[i].date){
            answerArr.push(theirArray[i]);
         }
      }
      console.log(answerArr, '*********');
      this.events = answerArr;
      console.log(this.events, '%%%%%%%%%%%%%%%%%%%%');

   }.bind(this);
>>>>>>> 5ef8f92d85b7f5ae2afeea89e399853c22563d50
}]);
