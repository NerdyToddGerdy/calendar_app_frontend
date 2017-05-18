var app = angular.module('CalApp', []);


app.controller("MainController", ['$scope', '$timeout', '$http', function($scope, $timeout, $http){
  var controller = this;
  this.showSearch = true;
  this.swapper = 0;
  this.showMap = false;
  this.numBeers=99;
  this.todpia=false;
  this.showBeerModal = false;

  this.decBeers = function(){
    this.todpia=true;
    var that=this;
    $timeout(function(){that.todpia=false;
    console.log("dec!");
    if(that.numBeers===0){
      this.numBeers=99;
    }else{
      that.numBeers--;
    }
    },2000);

  };

//**************************************************//
// // show main map
// this.includePathMap = 'maps/map.html';
//   console.log('show map click');
// 	this.changeInclude = function(){
// 		this.includePath = 'maps/map.html';
// 	};
//**************************************************//
  // this.checkFavorite = function(user, beer){
  //   var found=false;
  //   for(var i=0; i<user.favoriteBeers.length; i++){
  //     if(user.favoriteBeers[i]._id === beer._id){
  //       return(true);
  //     }
  //   }
  //   return(false);
  // };

  this.makeFalse = function(){
    console.log("MAKING FALSE");
    this.favorite=false;
  };

  this.makeTrue = function(){
    console.log("MAKING TRUE");
    this.favorite=true;
  };

// this.getBeer = function(user, beer){
//   console.log(user);
//   this.selectedBeer=beer;
//   this.favorite=this.checkFavorite(user, beer);
//   console.log(this.favorite);
// };
//
// this.getUserBeer = function(user, beer){
//   console.log("USER SELECT");
//   this.selectedUserBeer=beer;
// };
//
// this.refreshSlider = function () {
//   $timeout(function () {
//     $scope.$broadcast('rzSliderForceRender');
//   });
// };

  // $scope.ibuSlider = {
  //   min: 0,
  //   max: 120,
  //   options: {
  //     floor: 0,
  //     ceil: 120
  //   }
  // };
  //
  // $scope.abvSlider = {
  //   min: 0,
  //   max: 15,
  //   options: {
  //     floor: 0,
  //     ceil: 15
  //   }
  // };
  //
  // $scope.srmSlider = {
  //   min: 1,
  //   max: 40,
  //   options: {
  //     floor: 1,
  //     ceil: 40,
  //     // pushRange: true
  //   }
  // };

this.next = function(){
  this.swapper++;
};

this.prev = function() {
  this.swapper --;
};

// this.getColor = function(srmColor){
//   var colors = ['#FFE699', '#FFD878', '#FFCA5A', '#FFBF42', '#FBB123', '#F8A600', '#F39C00', '#EA8F00', '#E58500', '#DE7C00', '#D77200', '#CF6900', '#CB6200', '#C35900', '#BB5100', '#B54C00', '#B04500', '#A63E00', '#A13700', '#9B3200', '#952D00', '#8E2900', '#882300', '#821E00', '#7B1A00', '#771900', '#701400', '#6A0E00', '#660D00', '#5E0B00', '#5A0A02', '#560A05', '#520907', '#4C0505', '#470606', '#440607', '#3F0708', '#3B0607', '#3A070B', '#36080A'];
//   return(colors[srmColor-1]);
//
// };
//
// this.getMiddleColor = function(color1, color2){
//   var colors = ['#FFE699', '#FFD878', '#FFCA5A', '#FFBF42', '#FBB123', '#F8A600', '#F39C00', '#EA8F00', '#E58500', '#DE7C00', '#D77200', '#CF6900', '#CB6200', '#C35900', '#BB5100', '#B54C00', '#B04500', '#A63E00', '#A13700', '#9B3200', '#952D00', '#8E2900', '#882300', '#821E00', '#7B1A00', '#771900', '#701400', '#6A0E00', '#660D00', '#5E0B00', '#5A0A02', '#560A05', '#520907', '#4C0505', '#470606', '#440607', '#3F0708', '#3B0607', '#3A070B', '#36080A'];
//   return(colors[Math.round((color1+color2)/2)]);
// };
//
// $scope.byRange = function (ibumin, ibumax, abvmin, abvmax, srmmin, srmmax, minibu, maxibu, minabv, maxabv, minsrm, maxsrm) {
//   if (minibu === undefined) minibu = Number.MIN_VALUE;
//   if (maxibu === undefined) maxibu = Number.MAX_VALUE;
//
//   return function predicateFunc(item) {
//     return (minibu <= item[ibumin] && item[ibumax] <= maxibu) && (minabv <= item[abvmin] && item[abvmax] <= maxabv) && (minsrm <= item[srmmin] && item[srmmax] <= maxsrm);
//   };
// };

// this.searchBeers = function(){
//   console.log('searching...');
//   $http({
//     method: 'GET',
//     url: '/beers/search/'+this.ibuMin+'/'+this.ibuMax,
//   }).then(function(response){
//     controller.beers = response.data;
//   });
// };

  // this.create = function(){
  //   $http({
  //     method: 'POST',
  //     url: '/beers',
  //     data: {
  //       name: this.name,
  //       description: this.description,
  //       shortName: this.shortName,
  //     }
  //   }).then(function(response){
  //     controller.name="";
  //     controller.description="";
  //     controller.shortName="";
  //     controller.getBeers();
  //   });
  // };

  // this.deleteBeers = function(id){
  //   $http({
  //     method: 'DELETE',
  //     url: '/beers/'+id,
  //   }).then(function(response){
  //     console.log("deleted", response);
  //   }, function(response){
  //     console.log("failed", response);
  //   });
  //   controller.getBeers();
  // };

  this.showEdit = function(id){
      this.editableBeersId = id;
  };

  // this.updateBeers = function(beers){
  //   $http({
  //     method: 'PUT',
  //     url: '/beers/' + beers._id,
  //     data: beers
  //   }).then(function(response){
  //       controller.editableBeersId=null;
  //       controller.getBeers();
  //   });
  // };

  // this.getBeers = function(){
  //   $http({
  //     method: 'GET',
  //     url: '/beers'
  //   }).then(function(response){
  //     controller.beers = response.data;
  //     controller.selectedBeer=(controller.beers[Math.floor((Math.random()*controller.beers.length)+1)]);
  //   });
  // };
  // this.getBeers();
  // this.refreshSlider();

//-------------MODAL-------------//

// var $openBtn = $('#question');
// var $modal = $('#modal');
// var $closeBtn = $('#closeBtn');
// var $pourMug = $('#pourmug');
// $openBtn.click(function() {
//   $scope.$apply(function() {
//     console.log('open clicked');
//     $modal.css('display', 'block');
//     $pourMug.css('transform', 'rotate(75deg)');
//     $pourMug.css('-webkit-transform', 'rotate(75deg)');
//     $pourMug.css('-moz-transform', 'rotate(75deg)');
//     $pourMug.css('-o-transform', 'rotate(75deg)');
//   });
// });
// $closeBtn.click(function() {
//   $scope.$apply(function(){
//     console.log('close clicked');
//     $modal.css('display', 'none');
//     $pourMug.css('transform', 'rotate(25deg)');
//     $pourMug.css('-webkit-transform', 'rotate(25deg)');
//     $pourMug.css('-moz-transform', 'rotate(25deg)');
//     $pourMug.css('-o-transform', 'rotate(25deg)');
//   });
// });
//
// this.getDeleteModal = function(){
// var $openD = $('#openD');
// var $modalDelete = $('#modalDelete');
// var $closeDelete = $('#closeDelete');
// $openD.click(function() {
//   $scope.$apply(function() {
//     console.log('open clicked');
//     $modalDelete.css('display', 'block');
//   });
// });
// $closeDelete.click(function() {
//   $scope.$apply(function(){
//     console.log('close clicked');
//     $modalDelete.css('display', 'none');
//   });
// });
// };


}]);//main controller close


  app.controller('userController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

  	var self = this;
    this.showUpdate = false;
    this.showProfile = false;
  	this.isFound = false;
  	this.finding = false;
  	this.requestError = null;
  	this.user = {};
  	this.loggedIn = false;
  	this.loginError = null;
    this.user.totalBeers = 0;

    this.getUserProfileColor = function(user){
      var low=0;
      var high=0;
      var total=0;
      for(var i=0; i<user.favoriteBeers.length; i++){
        if(user.favoriteBeers[i].srmMin !== undefined){
          low+=user.favoriteBeers[i].srmMin;
          high+=user.favoriteBeers[i].srmMax;
          total++;
        }
      }
      return(Math.floor(((low/total)+(high/total))/2));
    };

  	//************************************************************//
  	this.getUser = function(next) {
  		console.log('get user.....');
  		$http({ method: 'GET', url: '/users/loggedIn' }).then(function(response) {
  			if (response.data.status == 200) {
  				self.user = response.data.user;
  				self.loggedIn = true;
  				this.loginError = null;
  				console.log('200: ' + response.data.message);
  			} else {
  				self.user = {};
  				self.loggedIn = false;
  			}
  			return next();
  		});
  	};


  	this.getUser(function() {
  		console.log('Logged in User: ', self.user);
  	});

  //******************************************//
  	this.register = function(userPass) {
      if(this.registerForm.password.length>=8){
      if(this.registerForm.password === this.registerForm.passwordConfirm){
  		$http({
  			url: '/users',
  			method: 'POST',
  			data: this.registerForm
  		}).then(function(response) {
  			if (response.data.status == 201) {
  				location.reload();
  			} else {
  				self.loginError = "Username already taken";
  				self.registerForm = {};
  			}
  		});
    }else{
      self.loginError = "Passwords do not match";
      self.registerForm = {};
    }}else{
      self.loginError = "Password must be at least 8 characters";
      self.registerForm = {};
    }
  	};

  	//******************************************//
  	this.login = function(userPass) {
  		console.log(this.loginForm);
  		$http({
  			url: '/users/login',
  			method: 'POST',
  			data: this.loginForm
  		}).then(function(response) {
  			self.loginForm = {};
  			if (response.data.status == 401) {
  				self.loginError = response.data.message;
  			} else {
  				console.log('Logged in user: ', response.data);
  				self.user = response.data.user;
  				self.loggedIn = true;
  				self.showLogin = false;
  				self.loginError =null;
  			}
  		});
  	};

  //******************************************//
  	this.logout = function() {
  		console.log('logging out...');
  		$http({
  			url: '/users/logout',
  			method: 'POST'
  		}).then(function(response) {
  			location.reload();
  		});
  	};
  //******************************************//


  this.update = function(user) {
    if(user.newpassword.length>=8){
    if(user.newpassword === user.passwordConfirm){
      user.password=user.newpassword;
    $http({
      url: '/users/' +user._id,
      method: 'PUT',
      data: user
    }).then(function(response) {
      if (response.data.status == 201) {
        location.reload();
      } else {
        self.loginError = "Username already taken";
        self.registerForm = {};
      }
    });
  }else{
    self.loginError = "Passwords do not match";
    self.registerForm = {};
  }}else{
    self.loginError = "Password must be at least 8 characters";
    self.registerForm = {};
  }
  };


  this.deleteUser = function(id){
    self.logout();
    $http({
      method: 'DELETE',
      url: '/users/'+id,
    }).then(function(response){
      console.log("deleted", response);
    }, function(response){
      console.log("failed", response);
    });
  };

  // this.addFavorite =function(beer){
  //   console.log(this);
  //   console.log("FAVORITE");
  //   $http({
  //     url: '/users/addFav/'+beer._id,
  //     method: 'POST',
  //   }).then(function(response) {
  //     if (response.data.status == 200) {
  //       self.user.favoriteBeers.push(beer);
  //       self.user.totalBeers=self.user.favoriteBeers.length;
  //       console.log(self);
  //       console.log('added favorite');
  //     } else {
  //       console.log('error adding favorite');
  //     }
  //   });
  // };

  // this.removeFavorite =function(beer){
  //   $http({
  //     url: '/users/removeFav/'+beer._id,
  //     method: 'POST',
  //   }).then(function(response) {
  //     var bi = 0;
  //     if (response.data.status == 200) {
  //       for(var i=0; i<self.user.favoriteBeers.length; i++){
  //         if(self.user.favoriteBeers[i]==beer){
  //          bi = i;
  //         }
  //       }
  //       self.user.favoriteBeers.splice(bi, 1);
  //       self.user.totalBeers=self.user.favoriteBeers.length;
  //       console.log('removed favorite');
  //     } else {
  //       console.log('error removing favorite');
  //     }
  //   });
  // };

}]);

// ******************************************************//
// app.controller('mapController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
//
//       var self = this;
//       this.mapUser = 'johnd';
//       this.mapZip = '80803';
//       this.mapState = 'CO';
//       this.mapAddress = '120 South Tejon, Colorado Springs, CO';
//       this.mapFav ='IPA';
//
// }]);
// ******************************************************//
