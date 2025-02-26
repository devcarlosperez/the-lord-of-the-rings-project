import { MapContainer, ImageOverlay } from 'react-leaflet';
import './Map.css';

function Map() {
  const POSITION = [51.505, -0.09];
  
  const BOUNDS = [
    [30.0, -60.0],
    [70.0, 60.0],
  ];

  const MIDDLE_EARTH_MAP = "/images/middle-earth-map.jpg";

  return (
    <MapContainer
      center={POSITION} 
      zoom={5}
      scrollWheelZoom={false}
      className="map-container"
    >
      <ImageOverlay url={MIDDLE_EARTH_MAP} bounds={BOUNDS} />
    </MapContainer>
  );
}

export default Map;
