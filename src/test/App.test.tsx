import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
    it('should render correctly', () => {
        render(<App />)

        const mapElement = screen.getByTestId('map')
        expect(mapElement).toBeInTheDocument()
    })
})
