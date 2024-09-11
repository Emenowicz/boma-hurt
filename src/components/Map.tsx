import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position: [number, number] = [52.09813549787974, 21.241323217997397]; // Współrzędne Otwocka

// Komponent pomocniczy do ustawienia środka mapy
const SetViewOnClick = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();
  map.setView(coords, 15); // Tutaj ustawiamy poziom zoom
  return null;
};

const Map: React.FC = () => {
  return (
    <MapContainer style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Boma Hurt - Stefana Batorego 4, Otwock</Popup>
      </Marker>
      <SetViewOnClick coords={position} />
    </MapContainer>
  );
};

export default Map;