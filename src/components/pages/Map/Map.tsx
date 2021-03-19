import React from "react";

import "./Map.css";

interface MapProps {
  longitude: string | undefined;
  latitude: string | undefined;
}

const Map = ({ latitude, longitude }: MapProps) => {
  return (
    <div className="map">
      <iframe
        src={
          "https://maps.google.com/maps?q=" +
          latitude +
          "," +
          longitude +
          "&t=&z=15&ie=UTF8&iwloc=&output=embed"
        }
        width="100%"
        height="250px"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
