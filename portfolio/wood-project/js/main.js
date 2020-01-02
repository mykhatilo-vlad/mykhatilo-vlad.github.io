$(document).ready(function () {
	var owl = $(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			1300: {
				items: 3
			},
			1500: {
				items: 4
			}
		}
	});
	$('.materials__arrow-right').click(function () {
		owl.trigger('next.owl.carousel');
	});
	$('.materials__arrow-left').click(function () {
		owl.trigger('prev.owl.carousel', [300]);
	});
	
	$('.menu-toggle').click(function () {
		$('.fixed-menu').toggleClass('active');
		$('.fa-bars').toggleClass('non-active');
		$('.fa-times').toggleClass('non-active');
	})

	$(window).scroll(function () {
		$('.footer').each(function () {
			var objectPos = $(this).offset().top;
			var heightBody = $('.fixed-menu').height();
			var topOfWindow = $(window).scrollTop();

			if (objectPos < topOfWindow + heightBody - 300) {
				$('.fixed-menu').addClass("unfixed-menu");
			}
			else {
				$('.fixed-menu').removeClass("unfixed-menu");

			}
		});
	});


});