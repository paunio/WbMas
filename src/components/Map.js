import React from "react";
import GoogleMapReact from "google-map-react";

import { sampleMapData as mapData } from "../data/sample";
import { Marker } from "./Marker";

const Map = () => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBr5FEntXKWaIC5cHNOBRYep8oBDG9cEXo" }}
        defaultCenter={mapData.center}
        defaultZoom={mapData.zoom}
      >
        <Marker lat={mapData.center.lat} lng={mapData.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
