console.log('test app.js loaded');
angular.module('EventApp').controller('UserController', ['$scope', '$http',function($scope, $http){
   this.user = {};
   this.user.id = 0;
   this.current_user_id = {};
   this.users = [];
   this.userPass = {};
   this.update_user_data = {};
   this.test = "hi we love angular";
   this.url = 'https://calendar-app-api.herokuapp.com';
   //this.update_user_data

   /// ******************************* ///


   /// ******************************* ///

   this.login = function(userPass) {
      console.log(userPass);
      $http({
         method: 'POST',
         url: this.url + '/users/login',
         data: { user: { username: userPass.username, password: userPass.password }},
      }).then(function(response) {
         console.log('login localstorage: ' + response);
         this.user = response.data.user;
         this.current_user_id = response.data.user.id;
         console.log('current user id ', this.current_user_id);
         localStorage.setItem('token', JSON.stringify(response.data.token));
         localStorage.setItem('my_events_user_id', JSON.stringify(this.current_user_id));
         localStorage.setItem('my_events_username', JSON.stringify(userPass.username));
         this.user_id=this.current_user_id;
         // localStorage.setItem('my_events_address', JSON.stringify(userPass.full_address));
         // localStorage.setItem('my_events_is_admin', JSON.stringify(userPass.is_admin));
      }.bind(this));
   };

   /// ******************************* ///



   /// ******************************* ///
   this.getUsers = function(){
      $http({
         url: this.url + '/users',
         method: 'GET',
         headers:{
            Authorization: 'Bearer ' +
            JSON.parse(localStorage.getItem('token'))
         }
      }).then(function(response){
         console.log('get user response:' + response);
         if (response.data.status == 401) {
            this.error = "Unauthorized (41)";
         } else {
            console.log('refresh user list');
            this.users = response.data;
         }
      }.bind(this));
   };

   /// ******************************* ///


   /// ******************************* ///
  //  this.deleteUser = function(num){
  //     $http({
  //        url: this.url + '/users/' + num,
  //        method: 'DELETE'
   //
  //     }).then(function(response){
  //        console.log('delete user response:' + response + ' id ' + num);
  //        //delete user
  //     });
  //  };
   /// ******************************* ///
   this.deleteUser = function(id){
      console.log('delete user id ' + id);
      $http({
         method: 'DELETE',
         url: this.url + '/users/' + id,
      }).then(function(response){
         console.log('delete user response:' + response.data + ' id ' + id);
         this.getUsers();
      }.bind(this));
   };

   /// ******************************* ///
   this.logout = function(){
      localStorage.clear('token');
      localStorage.clear('my_events_username');
      localStorage.clear('my_events_user_id');
      localStorage.clear('my_events_address');
      localStorage.clear('my_events_is_admin');
      location.reload();
   };
   /// ******************************* ///
   this.getToken = function(){
      return localStorage.getItem('token');
   };

   /// ******************************* ///
   this.getLoggedInUserLocalStorage = function(){
      this.lsToken = localStorage.getItem('token');
      this.lsUsername = localStorage.getItem('my_events_username');
      this.lsUserId = localStorage.getItem('my_events_user_id');
      this.lsAddress = localStorage.getItem('my_events_address');
      this.lsIsAdmin = localStorage.getItem('my_events_is_admin');
   };

   /// ******************************* ///

   this.setLocalStorage = function(user){
      localStorage.setItem('my_events_user_id', JSON.stringify(user.id));
      localStorage.setItem('my_events_address', JSON.stringify(user.full_address));
      localStorage.setItem('my_events_is_admin', JSON.stringify(user.is_admin));
   };

   /// ******************************* ///
   this.updateCurrentUser = function(user){
      console.log('updateCurrentUser function . . .' + user.id);
      console.log('user' + user.username + 'full name' + user.full_name);
      $http({
         method: 'PUT',
         url: this.url + '/users/' + user.id,
         data: { user: {
            username: user.username,
            full_name: user.full_name,
            full_address: user.full_address,
            is_admin: user.is_admin,
            email_address: user.email_address,
         }},
      }).then(function(result) {
         console.log('update user data from server: ', result);
      }.bind(this));
   };

   // **************************************** //
   this.register = function() {
      console.log('register function . . .');
      console.log('register Formdata: ', this.regformdata);
      $http({
         method: 'POST',
         url: this.url + '/users',
         data: this.regformdata
      }).then(function(result) {
         console.log('register Data from server: ', result);
         // display success
         // this.regformdata={}; //clears form
         this.login(this.regformdata);
       }.bind(this));      //
      };
      //end process form
      // **************************************** //



}]);
