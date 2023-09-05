import React from 'react'
import './App.css'
import 'leaflet/dist/leaflet.css';
import Map from './components/Map'

function App() {
    return (
        <Map zoom={10} position={[-23.561034241147674, -46.73172618195721]}/>
    )
}

export default App
