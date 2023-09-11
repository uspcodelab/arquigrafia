import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../../style/marker.css'
import { LatLngExpression, Point } from 'leaflet';

export interface MarkerData {
    imageUrl : string;
    description: string;
    author: string;
    position: number[];
}

function ArqMarker (prop: MarkerData) {

    const pos : LatLngExpression = [prop.position[0], prop.position[1]];

    return (
        <Marker position={pos}>
            <Popup offset={[23, 0]}>
                <img src={prop.imageUrl} className="popup-image"/>
                <p>{prop.description}</p>               
                <p>Autor: {prop.author}</p>
            </Popup>
        </Marker>
    )
}

export default ArqMarker