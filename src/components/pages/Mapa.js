import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";
//import {Box} from '@chakra-ui/react'
//import {
// Combobox,
 //ComboboxInput,
// ComboboxPopover,
// ComboboxList,
// ComboboxOption,
//} from "@reach/combobox";

//import "@reach/combobox/styles.css";

const libraries = ["places"]
const mapContainerStyle = {
    height: "60vh",
    width: "100vh",
}
const center = {
    lat: -22.751070,
    lng: -47.333260,
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

export default function Mapa(){

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return(
        <div>
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8} 
            center={center}
            options={options}
            onLoad={onMapLoad}
            >
            </GoogleMap>
        </div>
    )
}