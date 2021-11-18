import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Skeleton from "react-loading-skeleton";

import classes from "./styles.module.scss";
import "./styles.scss";

// libraries const in google MAP
const libraries = ["places"];

// MAP container Styles
const containerStyle = {
  width: "100%",
  height: "100%",
};

const PositionMap = ({ position, countryName }) => {
  const [selected, setSelected] = useState(true);
  const mapRef = useRef();

  // Js api loader
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries,
  });

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // check the value of position
  if (
    position?.lat < -90 ||
    position?.lat > 90 ||
    position?.lng < -180 ||
    position?.lng > 180 ||
    !position?.lng ||
    !position?.lat
  ) {
    return (
      <div className={classes.errorCont}>
        <h4>There is an error in position attributes</h4>
      </div>
    );
  }
  return (
    <div className={classes.mapContainer}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={14}
          onLoad={onMapLoad}
        >
          <Marker
            position={position}
            onClick={() => {
              setSelected(true);
            }}
          />
          {selected && (
            <InfoWindow
              position={position}
              onCloseClick={() => {
                setSelected(false);
              }}
            >
              <div className={classes.mapInfoPopup}>
                <h3>{countryName || ""}</h3>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <Skeleton height={"100%"} width={"100%"} />
      )}
    </div>
  );
};

export default React.memo(PositionMap);
