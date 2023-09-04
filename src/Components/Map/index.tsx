import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const TILE_LAYER_PROPS = {
    attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
}

const MAP_CONTAINER_PROPS = {
    center: [51.505, -0.09],
    zoom: 10,
}

const Map = () => (
    <div data-testid="map">
        <MapContainer {...MAP_CONTAINER_PROPS}>
            <TileLayer {...TILE_LAYER_PROPS} />
        </MapContainer>
    </div>
)

export default Map
