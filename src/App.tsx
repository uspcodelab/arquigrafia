import React from 'react'
import { useState } from 'react';
import { MapContainer, TileLayer,  Marker, Popup} from 'react-leaflet'
import './App.css'
import 'leaflet/dist/leaflet.css';

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
                <img src={prop.imageUrl}></img>
                {prop.description}
                <br/><br/>
                Autor: {prop.author}
            </Popup>
        </Marker>
    )
}
function App() {
    const markers : React.ReactElement[] = [
        <ArqMarker key="marker1" imageUrl="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/01/bryan-cranston-breaking-bad.jpg" position={[51.505, -0.09]} description="ablueblabelabel" author="kutukalku"/>
    ];
    const [markersComponents, setMarker] = useState<React.ReactElement[]>(markers);
    

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
