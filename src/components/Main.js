import React from 'react'
import Card from './Card'

const Main = () => {
  return (
    <main>
        <div className="slider">
            <div className="slides">
                <div className="slide" style={{backgroundImage: "url('img/slider1.jpeg')"}}></div>
                <div className="slide" style={{backgroundImage: "url('img/slider2.jpeg')"}}></div>
                <div className="slide" style={{backgroundImage: "url('img/slider3.jpeg')"}}></div>
            </div>
            <button className="prev button">‹</button>
            <button className="next button">›</button>
        </div>
        <h3 className='mx-3 py-3'>Özetler</h3>
        <hr />
        <div className="row mt-3">
          <div className="col-4">
            <Card />
          </div>
          
        </div>
    </main>
  )
}

export default Main