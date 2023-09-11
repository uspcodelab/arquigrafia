import React from 'react'

import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import { MarkerData } from './ArqMarker'
import ArqMarker from './ArqMarker'
import CustomMarker from './CustomMarker';
import 'leaflet/dist/leaflet.css'
import markersJson from '../../markers.json'

const TILE_LAYER_PROPS = {
    attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
}

function getMarkerComponents() : React.ReactElement [] {
    const markers : MarkerData[] = markersJson.markers;
    const markerComponents : React.ReactElement[] = []
    for (let i = 0; i < markers.length; i++) {
        const marker = markers[i];
        markerComponents.push(<ArqMarker key={i}imageUrl={marker.imageUrl} position={marker.position} author={marker.author} description={marker.description}/>)
    }

    return markerComponents
}

function Map() {
    const [markersComponents, setMarkers] = useState<React.ReactElement[]>(getMarkerComponents());
    
    function AddMarker(auth : string, desc : string, pos : number[]) {
        console.log(desc);
        console.log(auth);
        const newMarker = markersComponents.slice();
        newMarker.push(<ArqMarker imageUrl={""} position={pos} author={auth} description={desc}/>)
        setMarkers(newMarker);
    }
    
    return (<div data-testid="map">
         <MapContainer center={[-23.55993522722115, -46.72985308377932]} 
                          zoom={13}>  
            <TileLayer {...TILE_LAYER_PROPS} />
            <div data-testid="marker">
                {markersComponents}
            </div>
            <div data-testid="custom-marker">
                <CustomMarker OnCreateMarker={AddMarker}/>
            </div>
        </MapContainer>
    </div>)
}

export default Map
