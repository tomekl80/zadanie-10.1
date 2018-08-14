'use scrict';

// Main section of carousel
var elem = document.querySelector('.main-carousel');

var flkty = new Flickity(elem, {
	cellAlign: 'left',
	contain: true,
	freeScroll: true,
	imageLoaded: true,
	hash: true,
});

// Stage 11 of excercise 10.1
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelector('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select(0);
});

// Stage 12 of excercise 10.1
var progressBar = document.querySelector('.progress-bar');

	flkty.on('scroll', function (progress) {
		// body...
		progress = Math.max(0, Math.min(1, progress));
		progressBar.style.width = progress * 100 + '%';
	});

// Mustache slides section

var templateSlideList = document.getElementById('template-slides-list').innerHTML;

var templateSlidesItems = document.getElementById('template-slides-items').innerHTML;

			Mustache.parse(templateSlidesItems);

			var listItems = '';

			for (var i = 0; i < slidesData.length; i++) {
				console.log(slidesData);
				listItems += Mustache.render(templateSlidesItems, slidesData[i]);
			}

			var fullSlidesList = Mustache.render(templateSlideList, {slides: listItems});

			view-slides.insertAdjacentHTML('beforeend', fullSlidesList);