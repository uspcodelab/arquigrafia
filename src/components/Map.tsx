import React from 'react';
import '../App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

interface MapProps {
    position : [number, number],
    zoom : number
}

function Map({position, zoom} : MapProps) {

    const tileLayerProps = { 
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }

    return (
        <MapContainer className="main-map" center={position} zoom={zoom}>                            
            <TileLayer {...tileLayerProps}/>         
        </MapContainer>
    )
}

export default Map;
