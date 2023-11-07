var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController')

// use middleware
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.use('/', function(req, res,next){
    console.log('Request URL: ' + req.url);
    next();
})

apiController(app);
htmlController(app);
app.listen(3000);