console.log('temp_controller.js running');

var app = angular.module('myEvents', []);

app.controller('EventController', ['$http', function($http) {
  this.message = "angular works";
  this.showLogin = true;
  this.users=[];
  this.regformdata = {};
  this.loginformdata = {};
  // this.URL ='https://noticeboard-app-api.herokuapp.com/notices'
  this.URL = 'http://localhost:3000/users';


  $http({
      method: 'GET',
      url: this.URL,
    }).then(function(response) {
      console.log('get: ' + response);
      this.users = response.data;

    }.bind(this));

    // **************************************** //
      this.userLogin = function() {
      	console.log('user login . . .');
      	console.log('user data: ', this.loginformdata);
          $http({
          method: 'POST',
          url: this.URL + '/login',
          data: this.loginformdata
        }).then(function(result) {
          console.log('user data from server: ', result);
          this.loginformdata={}; //clears form
          //this.users.unshift(result.data);
        }.bind(this));      //
      }; //end process form
  // **************************************** //

  // **************************************** //
    this.register = function() {
    	console.log('register function . . .');
    	console.log('register Formdata: ', this.regformdata);
        $http({
        method: 'POST',
        url: this.URL,
        data: this.regformdata
      }).then(function(result) {
        console.log('register Data from server: ', result);

        // display success
        // this.regformdata={}; //clears form
      }.bind(this));      //
    }; //end process form
// **************************************** //

//end ctrl
}]);
// *****************
