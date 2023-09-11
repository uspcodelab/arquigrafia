import React from 'react'
import { Marker, Popup, useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../../style/marker.css'
import { LatLngExpression, marker } from 'leaflet';
import { useRef, useState, useEffect } from 'react';

function CustomMarker({OnCreateMarker} : any) {
    const descriptionRef = useRef(null);
    const authorRef = useRef(null);
    const markerRef = useRef<any>(null);
    const [position, setPosition] = useState<LatLngExpression>();

    
    useMapEvent('click', (e : any) => {
        const newPos : LatLngExpression = [e.latlng.lat, e.latlng.lng];
        setPosition(newPos);
    });

    function OnSubmitForm(e : any) {
        e.stopPropagation();
        if (authorRef.current == null || descriptionRef.current == null) {
            return;
        }

        OnCreateMarker(authorRef.current['value'], descriptionRef.current['value'], position);
        setPosition(undefined);
    }

    useEffect(() => {
      console.log(markerRef);
      console.log(markerRef?.current?.openPopup)
      markerRef?.current?.openPopup();
    }, [position]); 

    return position === undefined ? null : (
      <Marker zIndexOffset={-100} ref={markerRef} position={position}>
        <Popup offset={[23, 0]}>
          Adicione a descrição:
          <textarea ref={descriptionRef} defaultValue={"Você está aqui!"} rows={4} cols={40}/>
          Autor:
          <textarea ref={authorRef} defaultValue={""} rows={1} cols={40}/>
          <button onClick={(e) => {OnSubmitForm(e)}}> Adicionar marcador</button>
          
        </Popup>
      </Marker>
    )
}

export default CustomMarker