

// Responsive Menu ber section here

$(document).ready(function() {
	
	$(".mobile-nev").click(function(){
		$(this).hide();
		$(".mobile-cls-btn").show();
		$(".side-mobile-nav").addClass("res-menu-active");

	});

	$(".mobile-cls-btn").click(function(){
		console.log("close-btn");
		$(this).hide();
		$(".mobile-nev").show();
		$(".side-mobile-nav").removeClass("res-menu-active");

	});

	$(".mobile-nev-items a").click(function(){
		$(".side-mobile-nav").removeClass("res-menu-active");
		$(".mobile-cls-btn").hide();
		$(".mobile-nev").show();

	})
	
});