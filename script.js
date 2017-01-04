$(document).ready(function(){
	// Initialize Firebase
    var config = {
        apiKey: "AIzaSyA42_fof6OAAUz5YuDHRLIt9hYAvyRjsLA",
        authDomain: "fanciestwghpages.firebaseapp.com",
        databaseURL: "https://fanciestwghpages.firebaseio.com",
        storageBucket: "fanciestwghpages.appspot.com",
        messagingSenderId: "138288406567"
    };
    firebase.initializeApp(config);

	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.modal').modal();
	$('a[href*="#"]:not([href="#modal1"])').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 700);
    	return false;
	});
});

function clearForm(){
	$('#first_name').val("");
	$('#last_name').val("");
	$('#email').val("");
	$('#message').val("");
	console.log("Tested");
}

function sendMsg(){
	var today = new Date();
	var todayStr = today.toString();
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
		message: msg,
		fromSite: "FanciestW.github.io",
		date: todayStr
	});
	clearForm();
}