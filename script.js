$(document).ready(function(){
	// Initialize Firebase
  	var config = {
	    apiKey: "AIzaSyB9WoQ_uYkFmUFB1c_6ihLwl8jDCQPRJtM",
	    authDomain: "contactme-313af.firebaseapp.com",
	    databaseURL: "https://contactme-313af.firebaseio.com",
	    storageBucket: "contactme-313af.appspot.com",
	    messagingSenderId: "1096291680692"
  	};
  	firebase.initializeApp(config);

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

function sendMsg(){
	var database = firebase.database().ref('messages');
	var newMsg = database.push();
	var fName = document.getElementById('first_name').value;
	var lName = document.getElementById('last_name').value;
	var em = document.getElementById('email').value;
	var msg = document.getElementById('message').value;
	newMsg.set({
		firstName: fName,
		lastName: lName,
		email: em,
		message: msg
	});
	clearForm();
}