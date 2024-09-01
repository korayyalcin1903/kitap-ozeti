import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeOzetFromDatabase } from '../actions/ozets'

const Card = (props) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="card">
                <img src={`../img/books/${props.ozet.image}`} alt="" className='img-fluid' />
                <div className="card-body">
                    <h5 className='title'>{props.ozet.name}</h5>
                    <p>{props.ozet.description.substring(0,100)}...</p>
                    <div className="button-group">
                        <Link to={`ozet/${props.ozet.id}`} state={props.ozet} className='btn btn-secondary'>Oku</Link>
                        <button onClick={(e) => {
                            e.preventDefault()
                            dispatch(removeOzetFromDatabase(props.ozet.id))
                        }} className='btn btn-danger'>Sil</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card