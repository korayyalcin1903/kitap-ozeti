import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={`../img/books/${props.ozet.image}`} alt="" className='img-fluid' />
                <div className="card-body">
                    <h5 className='title'>{props.ozet.name}</h5>
                    <p>{props.ozet.description.substring(0,100)}...</p>
                    <Link to={`ozet/${props.ozet.id}`} state={props.ozet} className='btn btn-secondary'>Oku</Link>
                </div>
            </div>
        </>
    )
}

export default Card