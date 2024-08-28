import React from 'react'

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
    </main>
  )
}

export default Main