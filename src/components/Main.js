import React, { useEffect } from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { getOzetsFromDatabase } from '../actions/ozets'


const Main = (props) => {
  useEffect(() => {
    props.getOzetsFromDatabase()
  }, [props])

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
        <div className="">
          <h3 className='mx-3 py-3'>Özetler</h3>
        </div>
        <hr />
        <div className="row mt-3">
            {
              props.ozets.map((ozet) => (
                <div className="col-4" key={ozet.id} {...ozet}>
                  <Card ozet={ozet} />
                </div>
              ))
            }
        </div>
    </main>
  )
}


const mapStateToProps = (state) => ({
  ozets: state.ozets 
});

const mapDispatchToProps = (dispatch) => ({
  getOzetsFromDatabase: () => dispatch(getOzetsFromDatabase())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);