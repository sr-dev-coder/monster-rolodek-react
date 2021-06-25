import React from 'react';
import {} from './search-box.style.css';

export const SearchBox = ({ placeholer, handleChange }) =>{
    return <input type="search" className="search" placeholder={placeholer} onChange={handleChange} />
}