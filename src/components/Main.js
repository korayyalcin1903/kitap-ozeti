import React, { useEffect, useState } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { getOzetsFromDatabase, searchOzetsFromDatabase } from '../actions/ozets';
import SearchBar from './search/SearchBar';

const Main = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      props.getOzetsFromDatabase();
    }
  }, [searchTerm, props]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm) {
      props.searchOzetsFromDatabase(searchTerm)
    }
  };

  return (
    <main>
      <div className="slider">
        <div className="slides">
          <div className="slide" style={{ backgroundImage: "url('img/slider1.jpeg')" }}></div>
          <div className="slide" style={{ backgroundImage: "url('img/slider2.jpeg')" }}></div>
          <div className="slide" style={{ backgroundImage: "url('img/slider3.jpeg')" }}></div>
        </div>
        <button className="prev button">‹</button>
        <button className="next button">›</button>
      </div>
      <div className="justify-content-between">
        <h3 className='mx-3 py-3'>Özetler</h3>
        <SearchBar onSearch={handleSearch} />
      </div>
      <hr />
      <div className="row mt-3">
        {props.ozets.length > 0 ? (
          props.ozets.map((ozet) => (
            <div className="col-4" key={ozet.id} {...ozet}>
              <Card ozet={ozet} key={ozet.id}/>
            </div>
          ))
        ) : (
          <h3>Özet bulunamadı...</h3>
        )}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  ozets: state.ozets,
});

const mapDispatchToProps = (dispatch) => ({
  getOzetsFromDatabase: () => dispatch(getOzetsFromDatabase()),
  searchOzetsFromDatabase: (searchTerm) => dispatch(searchOzetsFromDatabase(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
