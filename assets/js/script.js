/*jshint jquery:true */

$(document).ready(function ($) {
	"use strict";

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
				if(this.hash.slice(1) === 'home') {	//Avoid animation for home
					return;
				}
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top + 20
					}, 800, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						// if ($target.is(":focus")) { // Checking if the target was focused
						// 	return false;
						// } else {
						// 	$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						// 	$target.focus(); // Set focus again
						// 	$('#navbarSupportedContent').removeClass('show')
						// 	$('.navbar-toggler').addClass('collapsed')
						// };
					});
				}
			}
		});

	// define variables
	var items = document.querySelectorAll(".timeline .entry--left, .timeline .entry--right");

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


	// modal
	$('.abstract-modal').on('click', function(event) {
		const key = $(event.target).data('key');

		picoModal({
			content: $('#modal'+key).html(),
			closeButton: false,
			overlayStyles: function ( styles ) { styles.opacity = 0; },
			modalStyles: function ( styles ) { styles.opacity = 0, styles.padding = 0, styles.marginTop = '20px' }
		})
		.afterCreate(function(modal){
			modal.modalElem().getElementsByClassName("close")[0]
			.addEventListener('click', modal.close);
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
		
	});
});


function Resize() {
	$(window).trigger('resize');
}