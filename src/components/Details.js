import React from 'react'
import { useLocation } from 'react-router-dom'
import Layout from '../layout/Layout'

const Details = ({props}) => {
  const location = useLocation()
  const ozet = location.state
  
  return (
    <>
    <Layout>
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

    </Layout>
    </>
  )
}

export default Details