'use scrict';

// Main section of carousel
var elem = document.querySelector('.main-carousel');

var flkty = new Flickity(elem, {
	cellAlign: 'left',
	contain: true,
	freeScroll: true,
	imageLoaded: true
});