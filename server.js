var express = require('express');
var app = express();



var middleware = require('./middleware.js');

// app.use(middleware.requireAuthentication);


app.get('/', middleware.logger, function (req, res) {
	res.send('Hello Express!!');
});
app.get('/about', function (req, res) {
	res.send('About page!');
});
app.use(express.static(__dirname + '/public'));
var PORT = 3000

app.listen(PORT, function (){
	console.log('Server started on port ' + PORT );
});