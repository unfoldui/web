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

	$('#attendance-form').click(()=>{
		const form = '<iframe id="#registration-embed" src="https://docs.google.com/forms/d/e/1FAIpQLSc1wcZD_Pavj_VQbAh3ZMnzNpVTCsWHk-DPv2_koRCISaDezA/viewform?embedded=true" width="750" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'
		picoModal({
			content: form,
			closeButton: false,
			overlayStyles: function ( styles ) { styles.opacity = 0; },
			modalStyles: function ( styles ) { styles.opacity = 0, styles.padding = 0, styles.marginTop = '20px' }
		})
		.afterShow(function(modal){
			$(modal.overlayElem()).animate({opacity: 0.7});
			$(modal.modalElem()).animate({opacity: 1});
		})
		.beforeClose(function(modal, event) {
			event.preventDefault();
			$(modal.overlayElem()).add(modal.modalElem())
			.animate(
				{ opacity: 0 },
				{ complete: modal.forceClose }
			);
		})
		.afterClose(function (modal) { modal.destroy(); })
		.show();
	})

function Resize() {
	$(window).trigger('resize');
}