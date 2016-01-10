$(document).ready(function () {

	var scrollSpeed=2000;

	/* Mobile nav menu button click --- opens side menu */
	$(".js--nav-btn").click(function(event) {
		var nav = $(".js--main-nav");

		nav.toggleClass('open');
	});


	/* Sticky navigation */
	$('.js--section-features').waypoint(function(direction){
		if (direction == "down"){
			$('nav').addClass("sticky");

		} else if (direction == "up"){
			$('nav').removeClass("sticky");

		}
	},{
		offset: '10%'	
	});

	/* Scroll to sections buttons (animation) */
	$(".js--scroll-to-plans").click(function(){
		$("html, body").animate({
			scrollTop: $(".section-price").offset().top
		}, scrollSpeed);
	});

	$(".js--scroll-to-start").click(function(){
		$("html, body").animate({
			scrollTop: $(".section-features").offset().top
		}, scrollSpeed/2);
	});

	/* Nav buttons scrolling */
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, scrollSpeed/2);
	        return false;
	      }
	    }
	  });
	});


	/* Animations */

	// logo animation
	$(".js--wp-1").waypoint(function (direction) {
		$(".js--wp-1").addClass('animated fadeIn');
	},{offset: '65%'}
	);

	// iPhone moving up
	$(".js--wp-2").waypoint(function (direction) {
		$(".js--wp-2").addClass('animated fadeInUp');
	},{offset: '65%'}
	);

	$(".js--wp-4").waypoint(function (direction) {
		$(".js--wp-4").addClass('animated pulse');
	},{offset: '75%'}
	);
});