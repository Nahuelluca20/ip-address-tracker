import React from 'react';
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents
} from 'react-leaflet';
import locationI from "../images/icon-location.svg"
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { icon } from "leaflet";

const MapStyled = styled.div`
  .leaflet-container {
    height: 550px;
    z-index: 0;
  }
`

function LocationMarker({ position }) {
  var marker = icon({
    iconUrl: locationI,
    iconSize: [30, 36],
  });
  const map = useMapEvents({});
  map.flyTo(position, map.getZoom());
  return position === null ? null : (
    <Marker position={position} icon={marker}></Marker>
  );
}

const Map = ({ position }) => (
  <MapStyled>
    <div className="leaflet-container">
      <MapContainer
        className="map-container"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={position} />
      </MapContainer>
    </div>
  </MapStyled>
);

Map.propTypes = {
  position: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
};

export default Map;