var express=require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');

var app = express();
var port = process.env.PORT || 3000;
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/users_for_calendar';

mongoose.connect(mongoUri);

var beersController = require('./controllers/beers.js');
var seedController = require('./controllers/seeds.js');
var usersController = require('./controllers/usersController');

app.use(morgan('dev'));
app.use(express.static('public'));

app.use(session({
  secret: 'brain_gremlin',
  resave: true,
  saveUninitialized: false,
  maxAge: 2592000000
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/beers', beersController);
app.use('/seed', seedController);
app.use('/users', usersController);

mongoose.connection.once('open', function(){
  console.log('connected to mongo...');
});

app.listen(port, function(){
  console.log('listening...');
});
