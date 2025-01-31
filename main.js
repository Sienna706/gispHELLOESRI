// Import necessary modules from ArcGIS API
require([
    "esri/Map",
    "esri/views/MapView"
  ], function(Map, MapView) {
  
    // Create a new map
    var map = new Map({
      basemap: "streets"  // Choose the basemap type (e.g., streets, topographic, etc.)
    });
  
    // Create a MapView (where the map will be displayed)
    var view = new MapView({
      container: "viewDiv",  // Div element where the map will go
      map: map,              // The map instance created earlier
      center: [-118.80500, 34.02700], // Longitude, Latitude of the center
      zoom: 13               // Zoom level
    });
  
  });
  