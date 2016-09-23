$(document).ready(function(){
	$('a').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 500);
    	return false;
	});
});

$(window).scroll(function(){
    var currentTop = $(window).scrollTop();
    if (currentTop < 100) {
        $(".nav").show(200);
    } else{
        $(".nav").hide(200);
    }
});