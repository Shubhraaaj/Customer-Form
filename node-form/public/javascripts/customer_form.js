var customerName="";
var gender = 0;
var age = 0;
var interestedCategories = [0, 0, 0, 0];
var discount = "";
var monthlyRequirement = "";
var dateOfRequirement = "";
var whatsappNumber = "";

$(document).ready(function(){
	$('#medicine-checkbox').click(function(){
		checkAndUncheckBox('#medicine-check', 0);
	});
	$('#medicine-check').click(function(){
		checkAndUncheckBox('#medicine-check', 0);
	});
	$('#flight-checkbox').click(function(){
		checkAndUncheckBox('#flight-check', 1);
	});
	$('#flight-check').click(function(){
		checkAndUncheckBox('#flight-check', 1);
	});
	$('#cosmetics-checkbox').click(function(){
		checkAndUncheckBox('#cosmetics-check', 2);
	});
	$('#cosmetics-check').click(function(){
		checkAndUncheckBox('#cosmetics-check', 2);
	});
	$('#mobiles-checkbox').click(function(){
		checkAndUncheckBox('#mobiles-check', 3);
	});
	$('#mobiles-check').click(function(){
		checkAndUncheckBox('#mobiles-check', 3);
	});
	$('#submit-btn').click(function(){
		customerName = $('#name-box').val();
		discount = $('#discount-box').val();
		monthlyRequirement = $('#monthly-box').val();
		dateOfRequirement = $('#next-med-box').val();
		whatsappNumber = $('#whatsapp-box').val();
		age = $("input[name='age']:checked").val();
		gender = $("input[name='gender']:checked").val();
	});
});

function checkAndUncheckBox(checkboxId, id)
{
	if($(checkboxId).prop('checked') == true)
	{
		$(checkboxId).prop('checked', false);
		interestedCategories[id] = 0;		
	}
	else
	{
		$(checkboxId).prop('checked', true);
		interestedCategories[id] = 1;				
	}
}