import React, { useEffect, useRef } from 'react';

// Google Maps API script URL
const MAPS_API_URL = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;

function Map({ hotels }) {
  const mapContainerRef = useRef(null);
  let map;

  useEffect(() => {
    // Load Google Maps API script
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = MAPS_API_URL;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', initializeMap);
      document.body.appendChild(script);
    };

    // Initialize the map
    const initializeMap = () => {
      const mapOptions = {
        center: { lat: 0, lng: 0 }, // Set the initial center of the map
        zoom: 12, // Set the initial zoom level
      };
      map = new window.google.maps.Map(mapContainerRef.current, mapOptions);
    };

    // Load the map script and initialize the map
    loadMapScript();

    // Clean up the map when the component unmounts
    return () => {
      if (map) {
        map = null;
      }
    };
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Map</h2>
      <div ref={mapContainerRef} style={{ height: '400px' }}></div>
    </div>
  );
}

export default Map;