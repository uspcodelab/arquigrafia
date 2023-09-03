import React from 'react'
import { useState } from 'react';
import { MapContainer, TileLayer,  Marker, Popup} from 'react-leaflet'
import './App.css'
import 'leaflet/dist/leaflet.css';
import markersJson from './markers.json';


interface MarkerData {
    imageUrl : string;
    description: string;
    author: string;
    position: Array<number>
}

function ArqMarker (prop: MarkerData) {

    return (
        <Marker position={prop.position}>
            <Popup>
                <img className="marker-img" src={prop.imageUrl}></img>
                {prop.description}
                <br/><br/>
                Autor: {prop.author}
            </Popup>
        </Marker>
    )
}

function getMarkerComponents() : React.ReactElement [] {
    const markers : MarkerData[] = markersJson.markers;
    const markerComponents : React.ReactElement[] = []
    for (let i = 0; i < markers.length; i++) {
        const marker = markers[i];
        markerComponents.push(<ArqMarker imageUrl={marker.imageUrl} position={marker.position} author={marker.author} description={marker.description}/>)
    }

    return markerComponents
}

function App() {
    const markerComponents : React.ReactElement[] = getMarkerComponents()    

    const [markersComponents, setMarker] = useState<React.ReactElement[]>(markerComponents);
    

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
            {markersComponents}
            </MapContainer>
        </div>
    )
}

export default App
