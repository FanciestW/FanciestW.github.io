$(document).ready(function(){
	$('a').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 500);
    	return false;
	});
});

$(window).scroll(function(){
	var previousTop = 100;
    var currentTop = $(window).scrollTop();
    console.log(currentTop);
    console.log(previousTop);
    if (currentTop < previousTop) {
        $(".nav").show();
    } else if(currentTop > previousTop){
        $(".nav").hide();
    }
    this.previousTop = currentTop;
});