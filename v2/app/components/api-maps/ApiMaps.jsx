"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { React, useEffect, useState } from "react";
// import { getCenterFromLocation } from "../api-geo/ApiGeo";
import "./ApiMaps.css";

export default function ApiMaps({ destination = "Rua da Consolacao, 700", origin = "Rua Heitor Penteado, 774" }) {
    const [center, setCenter] = useState({});
    // endereço do Mackenzie
    let position = {
      lat: -23.548065, 
      lng: -46.650185,
    }
  
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: process.env.MAPS_API_KEY,
    });
  
    // useEffect(() => {
    //   const newCenter = getCenterFromLocation(origin);
    //   setCenter(newCenter);
    // }, [origin, setCenter]);
    
    return (
      <div className="map">
        {isLoaded && (
          <GoogleMap mapContainerStyle={{ width: "100%", height: "100%" }} center={position} zoom={15}>
            <Marker
              position={position}
              options={{
                label: {
                  className: "map_marker",
                },
              }}
            />
          </GoogleMap>
        )}
      </div>
    );
  }