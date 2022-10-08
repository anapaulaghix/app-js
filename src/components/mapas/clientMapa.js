import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
Combobox,
ComboboxInput,
ComboboxPopover,
ComboboxList,ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const libraries = ["places"]
const mapContainerStyle = {
    height: "60vh",
    width: "100vh",
}
const center =  {
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
    const [markers, setMarkers] = React.useState([])
    
    const [selected, setSelected] = React.useState(null)
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

    const onMapClick = React.useCallback((event) => {
        setMarkers(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        }

    ])
    })

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return(
        <div>
            <Search />
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8} 
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
            >
                {markers.map(marker => <Marker 
                position={{
                    lat: marker.lat, lng: marker.lng
                }} 
                icon={{
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30),
                }}
                  onClick={() => {
                    setSelected(marker);
                  }}
                />)}
                {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} 
                onCloseClick={() => {setSelected(null)
                }}>
                    <div>
                        <h2>Novo Local</h2>
                        <h3>Digite o número do estabelecimento</h3>
                        <input type="number"></input>
                        <h3>Adicione o CEP desse local</h3>
                        <input type="number"></input>
                        <button>Adicionar</button>
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
        </div>
    )

    function Search(){
        const {ready, value, suggestions: {status, data}, setValue, clearSuggestions } = usePlacesAutocomplete({
            requestOptions: {
                location: {lat: () => -22.751070, lng: () => -47.333260},
                radius: 200 * 1000,
            }
        })

        const handleSelect = async (address) => {
            setValue(address, false);
            clearSuggestions();
        
            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);
            } catch (error) {
              console.log("😱 Error: ", error);
            }
          };

        return (
        <div className="search">
        <Combobox onSelect={handleSelect}
        >  
        <ComboboxInput value={value} onChange={(e) => {
            setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Digite o endereço"
        />
        <ComboboxPopover >
        {status === "OK" && data.map(({id, description}) => <ComboboxOption key={id} value={description}/>)}
        </ComboboxPopover>
        </Combobox>
        </div>
        )
    }
}
