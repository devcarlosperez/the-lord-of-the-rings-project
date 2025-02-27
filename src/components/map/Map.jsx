import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

function Map() {
  const POSITION = [-37.869383, 175.681950];

  return (
    <MapContainer center={POSITION} zoom={13} scrollWheelZoom={false} className="map-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={POSITION}>
        <Popup>
          Welcome to Hobbiton!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
