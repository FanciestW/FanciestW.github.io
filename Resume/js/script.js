$(document).ready(function(){
    $(".toTop").hide();
	$('a').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 500);
    	return false;
	});
    $(".scrollspy").scrollspy();
});

$(window).scroll(function(){
    var currentTop = $(window).scrollTop();
    if (currentTop < 500) {
        $(".navbar-fixed").show();
        $(".toTop").hide();
    } else{
        $(".navbar-fixed").hide();
        $(".toTop").show();
    }
});