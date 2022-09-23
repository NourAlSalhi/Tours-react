import React from 'react'
import { useState } from 'react'
//style
import "./Tour.css"

function Tour(props) {
    //state
    const [readMore, setReadMore] = useState(false);

    return (
        <div className='container'>
            <div className='main' key={props.key}>
                <img src={props.img} />
                <div className='data'>
                    <h3>Best Of {props.name} In {props.days} Days Tour</h3>
                    <div className='price'>${props.price}</div>
                </div>
                <p>
                    {readMore ? props.text : `${props.text.substring(0, 200)}...`}
                    <button className="btn" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : '  read more'}
                    </button>
                </p>
                <button className='cancel' onClick={() => props.removeTour(props.id)}> Not Interested </button>
            </div>


        </div>
    )
}

export default Tour