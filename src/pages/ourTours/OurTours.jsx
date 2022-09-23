import React from 'react'
import { useState } from 'react';
import Data from "../../Data"
import Tours from '../../components/tours/Tours'
//style
import "./OurTours.css"

function OurTours() {

    const { items } = Data;
    const [tours, setTours] = useState(items)

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }

    return (
        <div>
            <Tours tours={tours}  removeTour={removeTour} />
        </div>
    )
}

export default OurTours