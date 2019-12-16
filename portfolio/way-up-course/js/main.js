$(function () {
	$(window).scroll(function () {
		$('.free').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("zoomInLeft");
			}
		});
	});
	$(window).scroll(function () {
		$('.trip').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("zoomInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.lux').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("zoomInRight");
			}
		});
	});
})