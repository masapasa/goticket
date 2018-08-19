const nearestTruck = '/truckNearMe'
const allPlants = '/plantLocationMap'
const truckRoute = '/truckRoute'
const truckIcon = new H.map.Icon('./../assets/smallTruck.png');
const plantIcon = new H.map.Icon('./../assets/smallPlant.png');
const userIcon = new H.map.Icon('./../assets/smallUser.png');
var latitude;
var longitude;
var marker;
var map;
// initialize Platform
var platform = new H.service.Platform({'app_id': 'krQyFinwdjipbxxLuvkM', 'app_code': '7bXg_VCHttf9f9Am0ptjwg'});
// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();
// Instantiate (and display) a map object:
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    latitude = 31.426577;
    longitude = 34.381131;
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  var map = new H.Map(document.getElementById('map'), defaultLayers.normal.map, {
    zoom: 10,
    center: {
      lat: latitude,
      lng: longitude
    }
  });
  if (window.location.pathname == nearestTruck) {
    marker = new H.map.Marker({
      lat: 52.5,
      lng: 13.4
    }, {icon: userIcon});
    map.addObject(marker);
  }
  else if (window.location.pathname == allPlants) {
    marker = new H.map.Marker({
      lat: 52.5,
      lng: 13.4
    }, {icon: plantIcon});
    map.addObject(marker);
  }
  else if (window.location.pathname == truckRoute) {
    marker = new H.map.Marker({
      lat: 52.5,
      lng: 13.4
    }, {icon: truckIcon});
    map.addObject(marker);
  }
}




getLocation()

// Add the marker to the map:
