(function ($) {
	$('.comments__items').slick({
		arrows: false,
		autoplay: 5000,
	});

	$('#commentsPrev').click(function () {
		$('.comments__items').slick('slickPrev');
	})
	$('#commentsNext').click(function () {
		$('.comments__items').slick('slickNext');
	})

	var worksIn = anime({
		targets: '.works-in',
		keyframes: [
			{
				scale: 0.5,
				rotate: '1turn'
			},
			
		],
		duration: 500,
		easing: 'easeOutElastic(1, .8)',
		autoplay: false,
		direction: 'alternate'
	});


	$('.button-filter-all').on('click', function () {
		setTimeout(
			function () {
				$('.works__item').css('display', 'block');
			},
			500);

		$('.active').removeClass('active');
		$(this).addClass('active');
		worksIn.play();
	});

	$('.button-filter-html').on('click', function () {
		setTimeout(
			function () {
				$('.filter-html').css('display', 'block');
				$('.filter-wordpress').css('display', 'none');
			},
			500);

		$('.active').removeClass('active');
		$(this).addClass('active');
		worksIn.play();
	});

	$('.button-filter-wordpress').on('click', function () {
		setTimeout(
			function () {
				$('.filter-wordpress').css('display', 'block');
				$('.filter-html').css('display', 'none');
			},
			500);

		$('.active').removeClass('active');
		$(this).addClass('active');
		worksIn.play();
	});

	var mainMenu = $('.main-menu');
	var clonedMenu = $(mainMenu.clone());
	
	$(document).scroll(function () {
		if ($(document).width() > 785) {
			$(clonedMenu).addClass('fixed');
			$(mainMenu).before(clonedMenu);
			if ($(document).scrollTop() > $('.main-menu').height() + 10) {
				$(clonedMenu).css('top', '0');
			} else {
				$(clonedMenu).css('top', '-100%');
			}
		}
	})

	$(document).scroll(function () {
		if ($(document).scrollTop() > $('.page-header').height() - 200) {
			$('.page-footer__arrow').css('transform', 'scale(1)');
		} else {
			$('.page-footer__arrow').css('transform', 'scale(0)');
		}
	})

	$('.page-header__burger').click(function () {
		$('.page-header__burger, .page-header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	})

	$('.main-menu__item').click(function () {
		$('.page-header__burger, .page-header__nav').removeClass('active');
		$('body').removeClass('lock');
	})

})(jQuery);