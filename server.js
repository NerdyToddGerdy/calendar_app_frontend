var express = require('express');
var app = express();
var port = 4040;

app.use(express.static('public'));

app.listen(port, function(){
   console.log('listening', port);
});
