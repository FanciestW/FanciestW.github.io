$(document).ready(function(){
	$('.parallax').parallax();
	$('.modal').modal();
});

function clearForm(){
	$('#first_name').val("");
	$('#last_name').val("");
	$('#email').val("");
	$('#message').val("");
	console.log("Tested");
}