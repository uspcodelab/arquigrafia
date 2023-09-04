import React from 'react'
import { useState } from 'react';
import { MapContainer, TileLayer,  Marker, Popup} from 'react-leaflet'
import './App.css'
import 'leaflet/dist/leaflet.css';


function App() {
    const tileLayerProps = { 
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }

    const mapContainerProps = {
        center: [51.505, -0.09],
        zoom: 10
    }
    return (
        <div>
            <MapContainer {...mapContainerProps}>  
            <TileLayer {...tileLayerProps}/>
            </MapContainer>
        </div>
    )
}

export default App
