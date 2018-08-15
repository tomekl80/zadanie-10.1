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

			var view = document.querySelector('.view');

			view.insertAdjacentHTML('beforeend', fullSlidesList);

 
// Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
window.initMap = function() {
	
	// Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
	var uluru = {lat: -25.363, lng: 131.044};
	
	// W zmiennej map zapisujemy nową instancję obiektu Map. 
	var map = new google.maps.Map(document.getElementById('map'), {
		// Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
		zoom: 4,
		center: uluru
	});
	
	// Definiujemy marker jako nową instancję obiektu Marker.
	var marker = new google.maps.Marker({
		// I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne. 
		position: uluru,
		map: map
	}); 
}