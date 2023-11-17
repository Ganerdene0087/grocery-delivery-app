import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const DriverMap = ({ center, zoom, waypoints }) => {
  const mapRef = React.useRef();

  React.useEffect(() => {
    if (mapRef.current && waypoints.length > 1) {
      const leafletElement = mapRef.current.leafletElement;
      leafletElement.fitBounds(waypoints);

      const route = L.Routing.control({
        waypoints,
        routeWhileDragging: true, // Show route while dragging waypoints
        lineOptions: {
          styles: [
            { color: 'blue', opacity: 1, weight: 6 }, // Line style for the main route
            { color: 'red', opacity: 0.6, weight: 4, dashArray: '10, 10' }, // Line style for alternative routes
          ],
        },
      });

      route.addTo(leafletElement);
    }
  }, [waypoints]);

  return (
    <MapContainer ref={mapRef} center={center} zoom={zoom} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {waypoints.map((point, index) => (
        <Marker key={index} position={point}>
           <Popup>Waypoint {index + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DriverMap;