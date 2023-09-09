import React from 'react'
import './style/App.css'
import Map from './Components/Map'

import L from 'leaflet'
const DefaultIcon = L.icon({
    iconUrl: './marker.png'
});

L.Marker.prototype.options.icon = DefaultIcon;

const App = () => <Map />

export default App
