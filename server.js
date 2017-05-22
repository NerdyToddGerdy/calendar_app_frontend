var express = require('express');
var app = express();
var port = 4040;

app.use(express.static('public'));

// port = process.env.PORT || 4040;

app.listen(port, function(){
   console.log('listening', port);
});
