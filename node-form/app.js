var express = require('express');
var app = express();
var port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
/*mongoose.Promise = global.Promise;*/
mongoose.connect("mongodb://localhost:27017/node-form");

var customerSchema = new mongoose.Schema({
	customer_name: String,
	gender: String,
	age: String,
	categories: [String],
	discount: String,
	requirement: String,
	nextReq: Date,
	whatsapp: String,
	currentDate: {
		type: Date,
		default: Date.now
	}
});

var Customer = mongoose.model("Customer", customerSchema);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/html/customer_form.html');
});

app.post('/completed', (req, res) => {
	var newCustomer = new Customer(req.body);
	newCustomer.save().then(item => {
		res.send("Item saved to Database");
	}).catch(err => {
		res.status(400).send("Unable to save to Database");
	});
});

app.listen(port, () => {
	console.log('Server is listening to Port: ' + port);
});