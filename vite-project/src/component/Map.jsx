import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('leaflet-map');

    // 🧠 Check if Leaflet already has a map on that container
    if (mapContainer && mapContainer._leaflet_id) {
      mapContainer._leaflet_id = null; // 🧹 Clear it before re-init
    }

    const map = L.map('leaflet-map').setView([27.666247985069315, 85.35865166592437], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([27.666247985069315, 85.35865166592437])
      .addTo(map)
      .bindPopup('Your Construction Site')
      .openPopup();

    // 🧼 Optional: destroy map on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="leaflet-map"
      className="w-full h-[200px] rounded-lg overflow-hidden"
    ></div>
  );
};

export default Map;
