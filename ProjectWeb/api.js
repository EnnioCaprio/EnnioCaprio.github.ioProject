mapboxgl.accessToken = 'pk.eyJ1IjoiZW5uaW85NyIsImEiOiJjam43bDRwbWMzanJjM3dxdnRudzlieXVqIn0.ePOCVkhV6bsVuEW8CjTdIA'
var map = new mapboxgl.Map({
    container: 'map',
    center: [12.646361, 42.504154],
    zoom: 5,
    style: 'mapbox://styles/mapbox/streets-v9'

});

var marker = new mapboxgl.Marker()
  .setLngLat([14.25, 40.83333])
  .addTo(map);

var marker2 = new mapboxgl.Marker()
  .setLngLat([12.48278, 41.89306])
  .addTo(map);

var marker3 = new mapboxgl.Marker()
    .setLngLat([9.19034, 45.46416])
    .addTo(map);
