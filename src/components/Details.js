import React from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'

const Details = ({props}) => {
  const location = useLocation()
  const ozet = location.state
  
  return (
    <>
      <Header />
      <div className="container py-3">
        <div className='row details'>
          <div className="col-6">
            <img src={`../img/books/${ozet.image}`} className='img-fluid' alt="" />
          </div>
          <div className="col-6 px-2">
            <h3>{ozet.name}</h3>
            <h5>{ozet.author}</h5>
            <p>{ozet.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details