import React from 'react'
import Tour from '../tour/Tour';
//style
import "./Tours.css"

const Tours = (props) => {

    return (
        <div>
            <h2>Our Tours</h2>
            <hr />
            {
                props.tours.map((item) => (
                    <div>
                        <Tour key={item.id} {...item} removeTour={props.removeTour} />
                    </div>
                ))
            }
        </div>
    )
}

export default Tours;
