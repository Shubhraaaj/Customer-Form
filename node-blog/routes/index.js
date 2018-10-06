var express = require('express');
var router = express.Router();
var customers = require('../models/Customer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/first',(req,res)=>{
	console.log(req.body);
	var customer_name = req.body.customer_name;
	var gender = req.body.gender;
	var customerData = {
		customer_name,
		gender
	};
	var customerInstance = new customers(customerData);
	customerInstance.save((err)=>{
		if(err){
			res.send({ err : true , info : err });
		}else{
			res.send({ err : false });
		}
	});
});

// create
// update
// delete
// find
//findOne
//aggregate

module.exports = router;
