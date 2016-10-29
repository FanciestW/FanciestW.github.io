$(document).ready(function(){
    $(".toTop").hide();
	$('a').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 500);
    	return false;
	});
});

$(window).scroll(function(){
    var currentTop = $(window).scrollTop();
    if (currentTop < 500) {
        $(".nav").show();
        $(".toTop").hide();
    } else{
        $(".nav").hide();
        $(".toTop").show();
    }
});