import React from 'react'
import Tour from '../tour/Tour';

const Tours = (props) => {

    return (
        <div>
            <h2>Our Tours</h2>
            <hr />
            {
                props.tours.map((item) => (
                    <div>
                        <Tour key={item.id}  id={item.id} removeTour={props.removeTour} name={item.name} price={item.price} img={item.img} days={item.days} text={item.text} />
                    </div>
                ))
            }
        </div>
    )
}

export default Tours;