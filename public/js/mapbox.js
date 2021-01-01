const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
//import mapboxgl from 'mapbox-gl';

exports.displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaXJhbmlhbnBob2VuaXgiLCJhIjoiY2tpOHN5NWxqMDh4YTJ4cGp6cndqOWdsdiJ9.Ij9SoHgTFOl_Fb-BT1NVfQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/iranianphoenix/ckiaa399u6djw19rx6lskcwkn',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 6,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
