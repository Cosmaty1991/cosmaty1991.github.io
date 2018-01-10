// map

function initMap() {

  // create coordinates

  var myLatLng = {
    lat: 51.5181829,
    lng: -0.1519262
  };

  // create the map

  var map = new google.maps.Map(document.querySelector('.section-contact__map'), {
    zoom: 16,
    center: myLatLng
  });

  // create the marker on the map

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
