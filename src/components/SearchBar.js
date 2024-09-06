import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const searchText = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        if (search) {
            onSearch(search);
        }
    };

    return (
        <div className='input-group d-flex align-items-center'>
            <input 
                type="search" 
                className='form-input' 
                value={search} 
                onChange={searchText}
            />
            <button className='btn btn-secondary' onClick={handleSearch}>
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
};

export default SearchBar;
