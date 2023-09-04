import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock("leaflet/dist/leaflet.css")

test('aparece o mapa', () => {
    render(<App />)
    const linkElement = screen.getByTestId('mapa')
    expect(linkElement).toBeInTheDocument()
})
