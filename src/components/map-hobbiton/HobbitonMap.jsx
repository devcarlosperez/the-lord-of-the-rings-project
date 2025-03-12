import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./HobbitonMap.css";

function HobbitonMap() {
  const POSITION = [-37.869383, 175.68195];

  const MARKER_ICON = new L.Icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "/images/marker-shadow.png",
    shadowSize: [41, 41]
  });

  return (
    <MapContainer
      center={POSITION}
      zoom={13}
      scrollWheelZoom={false}
      className="hobbiton-map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={POSITION} icon={MARKER_ICON}>
        <Popup>Welcome to Hobbiton!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default HobbitonMap;