import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
  return (
    <div className='search-box'>
      <input
        className='search'
        type='search'
        placeholder='Search monsters...'
        onChange={props.handleChange}
      />
    </div>
  );
};

export default SearchBox;
