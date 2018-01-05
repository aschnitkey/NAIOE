// Properly fades "hero-header" content when page reloads and is not at the top
$(document).ready(function() {
	$(".hero-header").css("opacity", 1 - $(window).scrollTop() / 500);
});

// Fades out "hero-header" content when scrolling downn
$(window).scroll(function(){
    $(".hero-header").css("opacity", 1 - $(window).scrollTop() / 500);
  });

// Scroll down when arrow on front page is clicked
$('.link-scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// List scroll-over styling
$('.hover-scroll').hover(
	function(){
		$(this).animate({ fontSize: '1.3em' }, 200);
	}, function() {
		$(this).animate({ fontSize: '1em'}, 200);
	}
);