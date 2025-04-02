import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./MapLocationsMovies.css";

function MapLocationsMovies() {
  const LOCATIONS = [
    {
      name: "Hobbiton",
      position: [-37.869383, 175.68195],
      description: "Welcome to Hobbiton! Home of Bilbo and Frodo Baggins.",
    },
    {
      name: "Mordor (Mount Doom)",
      position: [-39.291, 175.563],
      description: "Filming location for Mount Doom in the Tongariro National Park.",
    },
    {
      name: "Rivendel",
      position: [-45.1527, 167.8651],
      description: "Filming location for Rivendel, home of the elves.",
    },
    {
      name: "Edoras (Minas Tirith)",
      position: [-43.4946, 170.6353],
      description: "Mount Sunday was used as the filming location for Edoras.",
    },
    {
      name: "Lothlórien",
      position: [-44.8548, 168.3823],
      description: "The beautiful forest of Lothlórien was filmed in Paradise, near Glenorchy.",
    },
    {
      name: "Goblin Caves",
      position: [-38.2617, 175.1108],
      description: "Waitomo Caves were used for the Goblin Caves in 'The Hobbit'.",
    },
  ];

  const MARKER_ICON = new L.Icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={[-40.9006, 174.886]}
      zoom={6}
      scrollWheelZoom={false}
      className="hobbiton-map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {LOCATIONS.map((location, index) => (
        <Marker key={index} position={location.position} icon={MARKER_ICON}>
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapLocationsMovies;