import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {

    return (
        <>
            <div className="card">
                <img src="../img/slider1.jpeg" alt="" className='img-fluid' />
                <div className="card-body">
                    <h5 className='title'>Title</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sapiente dolore corrupti, nisi eveniet eaque magni amet, qui deleniti dolor odio soluta eum praesentium sunt beatae laudantium impedit autem atque.</p>
                    <Link to={`ozet/${1}`} className='btn btn-secondary'>Oku</Link>
                </div>
            </div>
        </>
    )
}

export default Card