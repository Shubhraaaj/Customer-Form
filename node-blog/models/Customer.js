var mongoose = require('mongoose');
var customerSchema = new mongoose.Schema({
	customer_name: String,
	gender: String
	// age: String,
	// categories: [String],
	// discount: String,
	// requirement: String,
	// nextReq: Date,
	// whatsapp: String,
	// currentDate: {
	// 	type: Date,
	// 	default: Date.now
	// }
});

module.exports = mongoose.model("Customer", customerSchema);