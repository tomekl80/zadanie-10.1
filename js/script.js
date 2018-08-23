'use scrict';

// Main section of carousel
var templateSlidesItems = document.getElementById('template-slides-items').innerHTML;
var listItems = '';
var view = document.getElementById('carousel');
var elem = document.querySelector('.main-carousel');

Mustache.parse(templateSlidesItems);
for (var i = 0; i < slidesData.length; i++) {
	listItems += Mustache.render(templateSlidesItems, slidesData[i]);
}

view.innerHTML = listItems;
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

// Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
var infos = document.getElementById('infos');

window.initMap = function() {
	// W zmiennej map zapisujemy nową instancję obiektu Map. 
	var map = new google.maps.Map(document.getElementById('map'), {
		// Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
		zoom: 4,
		center: slidesData[0].coords
	});
	
	document.getElementById('center-map').addEventListener('click', function(event){
		event.preventDefault();
		map.panTo(slidesData[0].coords);
		map.setZoom(10);
	})

	// Loop creating marker for every coords
	for (var i = 0; i < slidesData.length; i++) {
		var marker = new google.maps.Marker({
			position: slidesData[i].coords,
			map: map
		});

		marker.addListener('click', function(event){
			infos.innerHTML = 'You clicked - marker';	
		});
	}
}