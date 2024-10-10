import axios from "axios";
import { mappls } from "mappls-web-maps";
import React, { useEffect, useRef, useState } from "react";
import image from "../../img/PngItem_1636271.png";

const mapplsClassObject = new mappls();

const Mappls = () => {
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 28.6139, lng: 77.209 });

  const loadObject = {
    map: true,
    layer: "raster",
    version: "3.0",
    libraries: ["polydraw"],
    plugins: ["direction"],
  };

  const getCurrentLocation = () => {
    alert(window.location);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setCoordinates({ lat: latitude, lng: longitude });

          // If the map is loaded, set its center to the current location
          if (mapRef.current) {
            mapRef.current.setCenter([longitude, latitude]);
            mapRef.current.setZoom(12); // Set a suitable zoom level for current location
          }
        },
        (error) => {
          console.error("Error getting current location: ", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async () => {
    console.log("long", coordinates.lng);
    console.log("lat", coordinates.lat);

    try {
      const response = await axios.get(
        `https://apis.mapmyindia.com/advancedmaps/v1/64198eaf91f8d4488cc6c1492e8acbae/rev_geocode`,
        {
          params: {
            lat: coordinates.lat,
            lng: coordinates.lng,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
   
    mapplsClassObject.initialize(
      "e5c5bb8e1dc2a7d349c9f7b92334259b",
      loadObject,
      () => {
        const newMap = mapplsClassObject.Map({
          id: "map",
          properties: {
            center: [28.633, 77.2194], 
            zoom: 10,
          },
        });

        newMap.on("load", () => {
          setIsMapLoaded(true);

         
          newMap.on("move", () => {
            const center = newMap.getCenter();
            setCoordinates({ lat: center.lat, lng: center.lng }); 
          });
        });

        mapRef.current = newMap;
      }
    );

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          id="map"
          style={{ width: "80%", height: "50vh", display: "inline-block" }}
        >
          {isMapLoaded}
        </div>
        {/* Static Marker at the Center */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none", // Prevent marker from interfering with map
          }}
        >
          <img
            src={image}
            alt="loading"
            style={{ width: "30px", height: "35px" }}
          />
        </div>
        <div>
          <p>Longitude: {coordinates.lng}</p>
          <p>Latitude: {coordinates.lat}</p>
        </div>
        <div className="btn">
          <button className="btn" onClick={handleSubmit}>
            Done
          </button>
          <button className="btn" onClick={getCurrentLocation}>
            Get Current Location
          </button>
        </div>
      </div>
    </>
  );
};

export default Mappls;
