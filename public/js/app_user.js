console.log('test app.js loaded');
var app = angular.module('auth_app', []);

app.controller('mainController', ['$http', function($http){



  this.user = {};
  this.users = [];
  this.userPass = {};
  this.test = "hi we love angular";
// this.url = 'http://localhost:3000';

    this.url = 'http://localhost:3000';

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
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('my_events_username', JSON.stringify(userPass.username));
      localStorage.setItem('my_events_address', JSON.stringify(userPass.full_address));
      localStorage.setItem('my_events_is_admin', JSON.stringify(userPass.is_admin));
    }.bind(this));
};

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
          console.log('list users');
          this.users = response.data;
        }
      }.bind(this));
    };

/// ******************************* ///
    this.logout = function(){
      localStorage.clear('token');
      localStorage.clear('my_events_username');
      localStorage.clear('my_events_address');
      localStorage.clear('my_events_is_admin');
      location.reload();
    };

/// ******************************* ///

}]);
