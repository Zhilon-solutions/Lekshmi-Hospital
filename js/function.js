(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$(document).ready(function(){
		$(".preloader").fadeOut(600);
	});

	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.active-sticky-header").css("height", $('header.active-sticky-header .header-sticky').outerHeight());
		}	
	
		$window.on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header.active-sticky-header .header-sticky').outerHeight()
			$("header.active-sticky-header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header.active-sticky-header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}	
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	if($("a[href='#top']").length){
		$(document).on("click", "a[href='#top']", function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}

	function initHeavyJS() {
		if (window.heavyJsInitialized) return;
		window.heavyJsInitialized = true;

		/* Testimonial Slider JS */
		if ($('.testimonial-slider').length) {
			const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
				slidesPerView : 1,
				speed: 1500,
				spaceBetween: 40,
				loop: true,
				autoplay: {
					delay: 5000,
				},
				breakpoints: {
					768:{
						slidesPerView: 2,
					},
					1300:{
						slidesPerView: 3,
					}
				},
				navigation: {
					nextEl: '.testimonial-button-next',
					prevEl: '.testimonial-button-prev',
				},
			});
		}

		/* Testimonial Slider Prime JS */
		if ($('.testimonial-slider-prime').length) {
			const testimonial_slider_prime = new Swiper('.testimonial-slider-prime .swiper', {
				slidesPerView : 1,
				speed: 1500,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 5000,
				},
				breakpoints: {
					768:{
						slidesPerView: 2,
					},
					1300:{
						slidesPerView: 3,
					}
				}
			});
		}

		/* Testimonial Slider Royal JS */
		if ($('.testimonial-slider-royal').length) {
			const testimonial_slider_stone = new Swiper('.testimonial-slider-royal .swiper', {
				slidesPerView : 1,
				speed: 1500,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 5000,
				},
				breakpoints: {
					768:{
						slidesPerView: 1,
					},
					1300:{
						slidesPerView: 2,
					}
				}
			});
		}
		
		/* Skill Bar */
		if ($('.skills-progress-bar').length) {
			$('.skills-progress-bar').waypoint(function() {
				$('.skillbar').each(function() {
					$(this).find('.count-bar').animate({
					width:$(this).attr('data-percent')
					},2000);
				});
			},{
				offset: '70%'
			});
		}

		/* Image Reveal Animation */
		if ($('.reveal').length) {
			if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
				gsap.registerPlugin(ScrollTrigger);
				let revealContainers = document.querySelectorAll(".reveal");
				revealContainers.forEach((container) => {
					let image = container.querySelector("img");
					let tl = gsap.timeline({
						scrollTrigger: {
							trigger: container,
							toggleActions: "play none none none"
						}
					});
					tl.set(container, {
						autoAlpha: 1
					});
					tl.from(container, 1, {
						xPercent: -100,
						ease: Power2.out
					});
					tl.from(image, 1, {
						xPercent: 100,
						scale: 1,
						delay: -1,
						ease: Power2.out
					});
				});
			}
		}

		/* Animated Wow Js */	
		if (typeof WOW !== 'undefined') {
			new WOW().init();
		}

		/* Progress Bar */
		if ($('.circle').length){	
			$('.circle').each(function() {			
				var el = $(this).circleProgress({value: 0});
				
				var rawValue = $(this).data('value'); 
					var progressValue = rawValue >= 1 ? 1 : rawValue;
					var progressBarOptions = {
						startAngle: -1.6,
						thickness: 3,
						fill: {
							color: window.getComputedStyle($(this)[0]).color 
						}
					};

				new Waypoint({
				  element: el.get(0),
				  handler: function() {
					// Initialize the progress bar
					el.circleProgress($.extend({}, progressBarOptions, {
						value: el.data('value')  
					})).on('circle-animation-progress', function(event, progress, stepValue) {
						
						var displayValue = Math.round(stepValue * 100); 
						$(this).find('.progress_value .pro_data').text(displayValue);
					});
						
					this.destroy();
				  },
				  offset: '80%'
				});			
			});		
		}
		
		/* Parallaxie js */
		var $parallaxie = $('.parallaxie');
		if($parallaxie.length && ($window.width() > 1024))
		{
			if ($window.width() > 768) {
				$parallaxie.parallaxie({
					speed: 0.55,
					offset: 0,
				});
			}
		}
	}

	if (window.innerWidth > 768) {
		initHeavyJS();
	} else {
		$(window).on('scroll touchmove click', initHeavyJS);
		setTimeout(initHeavyJS, 5000);
	}

	/* Our Pricing Tab Prime JS Start  */
	if ($('.our-pricing-box-prime').length) {
		$(".pricing-swich-btn-prime").click(function() {
			$(".pricing-swich-btn-prime").removeClass("active");
			$(this).addClass("active");
			let type = $(this).data("type");
			if (type === "yearly") {
				$('#monthly').addClass('d-none');
				$('#annually').removeClass('d-none');
			} else {
				$('#annually').addClass('d-none');
				$('#monthly').removeClass('d-none');
			}
		});
	}
	/* Our Pricing Tab Prime JS End  */
	

})(jQuery);