/*jshint jquery:true */

$(document).ready(function ($) {
	"use strict";

	/* ---------------------------------------------------------------------- */
	/*	Header animate after scroll
	/* ---------------------------------------------------------------------- */

	(function () {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 120;

		window.addEventListener('scroll', function () {
			if (!didScroll) {
				didScroll = true;
				setTimeout(function () {
					var sy = window.pageYOffset || docElem.scrollTop;
					if (sy >= changeHeaderOn) {
						$('header').addClass('active');
					} else {
						$('header').removeClass('active');
					}
					didScroll = false;
				}, 100);
			}
		}, false);

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

	(function () {
		// define variables
		var items = document.querySelectorAll(".timeline .entry--left, .timeline .entry--right ");
	
		function isElementInViewport(el) {
			var rect = el.getBoundingClientRect();
			return (
			  rect.top >= 0 &&
			  rect.left >= 0 &&
			  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}
	
		function callbackFunc() {
			for (var i = 0; i < items.length; i++) {
				if (isElementInViewport(items[i])) {
					if(items[i].classList.value.includes('entry--left'))
						items[i].classList.add("left-entry-in-view");
					else if(items[i].classList.value.includes('entry--right'))
						items[i].classList.add("right-entry-in-view");
				}
			}
		}
	
		// listen for events
		window.addEventListener("load", callbackFunc);
  		window.addEventListener("resize", callbackFunc);
		window.addEventListener("scroll", callbackFunc);
	
	})();

});


function Resize() {
	$(window).trigger('resize');
}