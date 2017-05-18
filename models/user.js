var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({

	username: { type: String, unique: true, required: true },
	state: { type: String, default: "tbd" },
	zipcode: { type: String, default: "80906" },
	email: { type: String, default: "tbd" },
	admin: { type: Boolean, default: false },
	favorite: { type: String, default: "" },
	password: { type: String, required: true },
	favoriteBeers: [],
	totalBeers: { type: Number, default: 0 }

});

// =================================================================
// PASSWORD HASHING AND AUTHENTICATION

// Before each save of the user, check if the password has been added or modified,
// and if it has, hash the provided password and store it.
// Used at signup / creating a user.
userSchema.pre('save', function(next) {
  if (!this.isModified('password')) { return next(); }
  var hashedPassword = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  this.password = hashedPassword;
  next();
});

// Method for comparing the provided password with the stored hashed password.
// Used at login / authenticating a user.
userSchema.methods.authenticate = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
