/*jshint jquery:true */

$(document).ready(function ($) {
	"use strict";

	/* ---------------------------------------------------------------------- */
	/*	Header animate after scroll
	/* ---------------------------------------------------------------------- */

	(function () {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 40;
		document.querySelector('header, a.go-top');

		function init() {
			window.addEventListener('scroll', function () {
				if (!didScroll) {
					didScroll = true;
					setTimeout(scrollPage, 100);
				}
			}, false);
		}

		function scrollPage() {
			var sy = scrollY();
			if (sy >= changeHeaderOn) {
				$('header').addClass('active');
				$('a.go-top').addClass('active');
			} else {
				$('header').removeClass('active');
				$('a.go-top').removeClass('active');
			}
			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();

	})();


	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			event.preventDefault();
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top - 80
					}, 400, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

});

function Resize() {
	$(window).trigger('resize');
}