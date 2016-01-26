var express = require('express');
var app = express();

var middleware = {
	requireAuthentication :function (req, res, next) {
		console.log('private route hit!');
		next();

	},
	logger: function (req, res, next) {
		console.log(req.method);
		next();
	}
};

// app.use(middleware.requireAuthentication);


app.get('/', middleware.logger, function (req, res) {
	res.send('Hello Express!');
});
app.get('/about', function (req, res) {
	res.send('About page!');
});
app.use(express.static(__dirname + '/public'));
var PORT = 3000

app.listen(PORT, function (){
	console.log('Server started on port ' + PORT );
});