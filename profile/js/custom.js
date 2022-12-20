$(document).ready(function() {
	// fullpage js
	$('#contentArea').fullpage({
		menu: '#menu',
		anchors: ['home', 'story', 'profile', 'pc',  'mobile', 'responsive', 'bootstrap', 'vue', 'react', 'toy'],
		
		scrollOverflow:true,
		slidesNavigation: true,
		continuousVertical: true,
		
		navigation: true,
		navigationPosition: 'right',
		// navigationTooltips: ['HOME', 'STORY', 'PROFILE', 'PC',  'MOBILE', 'RESPONSIVE', 'BOOTSTRAP', 'VUE', 'REACT', 'TOY'],

		fadingEffect: true,
		fadingEffectKey: 'YWx2YXJvdHJpZ28uY29tXzAzN1ptRmthVzVuUldabVpXTjBiNXo=',

		//scrollingSpeed: 700,
		//autoScrolling: true,
        //fitToSection: true,
        //fitToSectionDelay: 1000,
		
		lazyLoading: true,

		//Accessibility
        keyboardScrolling: true,
		animateAnchor: true,
        recordHistory: true,
		
		//verticalCentered: true,
		verticalCentered: false,

		//to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
		css3: false,

		// easing: 'easeOutBounce'
		
		//easingcss3: 'easeInOutCubic'								
		//easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'				
		//easingcss2: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
		
		
	});

});