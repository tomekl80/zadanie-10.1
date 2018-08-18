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
	
	// Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
	var uluru = {lat: 68.053, lng: 13.241};
	var coords2 = {lat: 47.558, lng: 10.750};
	var coords3 = {lat: 40.746, lng: -74.032};
	var coords4 = {lat: 55.762, lng: 37.615};
	var coords5 = {lat: 49.419, lng: 19.097};
	
	// W zmiennej map zapisujemy nową instancję obiektu Map. 
	var map = new google.maps.Map(document.getElementById('map'), {
		// Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
		zoom: 4,
		center: uluru
	});
	
	/*// Definiujemy marker jako nową instancję obiektu Marker.
	var markerOne = new google.maps.Marker({
		// I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne. 
		position: uluru,
		map: map
	});

		markerOne.addListener('click', function(){
			infos.innerHTML = 'You clicked markerOne - "View from Volandstinden in Lofoten Norway"';
		});

	var markerTwo = new google.maps.Marker({
		position: coords2,
		map: map
	});

		markerTwo.addListener('click', function(){
			infos.innerHTML = 'You clicked markerTwo - "Neuschwanstein Castle Schwangau Germany"';
		});

	var markerThree = new google.maps.Marker({
		position: coords3,
		map: map
	});

		markerThree.addListener('click', function(){
			infos.innerHTML = 'You clicked markerThree - "Hoboken, United States"';
		});

	var markerFour = new google.maps.Marker({
		position: coords4,
		map: map
	});

		markerFour.addListener('click', function(){
			infos.innerHTML = 'You clicked markerFour - "Moscow, Russia"';
		});

	var markerFive = new google.maps.Marker({
		position: coords5,
		map: map
	});

		markerFive.addListener('click', function(){
			infos.innerHTML = 'You clicked markerFive - "Bacówka PTTK na Rycerzowej sunset"';
		});*/

	document.getElementById('center-map').addEventListener('click', function(event){
		event.preventDefault();
		map.panTo(uluru);
		map.setZoom(10);
	})

	// Loop creating marker for every coords

	for (var i = 0; i < slidesData.length; i++) {
		var marker = new google.maps.Marker({
			position: slidesData[3],
			map: map
		});
			marker.addListener('click', function(){
				infos.innerHTML = 'You clicked - ' + slidesData[2];
			});
	}
}