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

	$('#attendance-form').click(() => {
		modal.show();
	});

	(function () {
		// define variables
		var items = document.querySelectorAll(".timeline .entry--left, .timeline .entry--right ");
	
		function isElementInViewport(el) {
			var rect = el.getBoundingClientRect();
			const temp =  (
			  rect.top >= 0 &&
			  rect.left >= 0 &&
			  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
			console.log(temp)
			return temp;
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

const modal = picoModal({
	content: document.getElementById('registration-form'),
	overlayStyles: function (styles) { styles.opacity = 0; },
	closeStyles:{
		width:'30px', height:'30px',
		position:'absolute',
		top:'5px', right: '5px',
		borderRadius: '50%',
		cursor: 'pointer',
		boxShadow: '0px 3px 11px 1px rgba(108, 117, 125, 0.41)'
	},
	modalStyles: function (styles) {
		styles.opacity = 0,
		styles.padding = 0,
		styles.marginTop = '40px',
		styles.width = (window.innerWidth <= 600) ? '90vw' : '500px'
	}
}).afterShow(function (modal) {
	$(modal.overlayElem()).animate({ opacity: 0.8 });
	$(modal.modalElem()).animate({ opacity: 1 });
}).beforeClose(function (modal, event) {
	event.preventDefault();
	$(modal.overlayElem()).add(modal.modalElem())
		.animate(
			{ opacity: 0 },
			{ complete: modal.forceClose }
		);
});

function submitRegistrationForm() {
	console.log('Form Submitted, Redirect User to thank you now.');
	modal.close();
}