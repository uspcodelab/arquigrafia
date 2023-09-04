import React from 'react'
import { useState, useRef } from 'react';
import { MapContainer, TileLayer,  Marker, Popup, useMapEvents} from 'react-leaflet';
import L, { LatLngExpression } from "leaflet";
import './App.css'
import 'leaflet/dist/leaflet.css';
import markersJson from './markers.json';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MarkerData {
    imageUrl : string;
    description: string;
    author: string;
    position: number[];
}

function ArqMarker (prop: MarkerData) {

    const pos : LatLngExpression = [prop.position[0], prop.position[1]];

    return (
        <Marker position={pos}>
            <Popup className="arq-popup">
                <img src={prop.imageUrl} className="popup-image"/>
                <p>{prop.description}</p>               
                <p>Autor: {prop.author}</p>
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

function CustomMarker({OnCreateMarker} : any) {
    const descriptionRef = useRef(null);
    const authorRef = useRef(null);
    const [position, setPosition] = useState<LatLngExpression>()
    const map = useMapEvents({
      click(e : any) {
         const newPos : LatLngExpression = [e.latlng.lat, e.latlng.lng];
         setPosition(newPos);
      }
    })

    function OnClick(e : any) {
        e.stopPropagation();
        if (authorRef.current == null || descriptionRef.current == null) {
            return;
        }

        OnCreateMarker(authorRef.current['value'], descriptionRef.current['value'], position);
        setPosition(undefined);
    }
  
    return position === undefined ? null : (
      <Marker position={position}>
        <Popup>
            Adicione a descrição:
          <textarea ref={descriptionRef} defaultValue={"Você está aqui!"} rows={4} cols={40}/>
          Autor:
          <textarea ref={authorRef} defaultValue={""} rows={1} cols={40}/>
          <button onClick={(e) => {OnClick(e)}}> Adicionar marcador</button>
          
        </Popup>
      </Marker>
    )
}

function App() {

    const [markersComponents, setMarkers] = useState<React.ReactElement[]>(getMarkerComponents());
    
    const tileLayerProps = { 
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }

    function AddMarker(auth : string, desc : string, pos : number[]) {
        console.log(desc);
        console.log(auth);
        const newMarker = markersComponents.slice();
        newMarker.push(<ArqMarker imageUrl={"https://static.wikia.nocookie.net/breakingbad/images/4/46/BCS_S6_Portrait_Mike.jpg/revision/latest?cb=20220522174959"} position={pos} author={auth} description={desc}/>)
        setMarkers(newMarker);
    }

    return (
        <div>
            <MapContainer center={[-23.55993522722115, -46.72985308377932]} 
                          zoom={13}>  
            <TileLayer {...tileLayerProps}/>
                <div>{markersComponents}</div>
                <CustomMarker OnCreateMarker={AddMarker}/>
            </MapContainer>
        </div>
    )
}

export default App
