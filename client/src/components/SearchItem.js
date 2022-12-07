import React, { useState } from 'react';
import getSearchResults from '../utils/shopping';

const SearchItem = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState('');
  const [item, setItem] = useState([]);

  const handleSearchInput = (e) => {
    const { target } = e;
    const inputValue = target.value;

    setSearchQuery(inputValue);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      setResults(getSearchResults(searchQuery));
    }

    setSearchQuery('');
  };

  const handleAddItem = () => {
    // This SHOULD get the values of the selected entry and set them to item!!!
    setItem([
      this.itemName,
      this.price,
      this.retailer,
      this.link,
      this.details,
      this.image
    ])
  }

  return (
    <div>
      <div>
        <label>Search for presents</label>
        <input
          type="text"
          placeholder="Search for presents"
          value={searchQuery}
          onChange={handleSearchInput}
          name="searchQuery"
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
      {/* 
        This SHOULD create an entry for each search item 
        I need to test if the refs work!!!!
      */}
      {results
        ? results.map((item) => (
            <div>
              <p ref={this.itemName}>item name: {item.title}</p>
              <p ref={this.link}>link: {item.link}</p>
              <p ref={this.retailer}>retailer: {item.source}</p>
              <p ref={this.price}>price: {item.extracted_price}</p>
              <p ref={this.details}>details: {item.extensions}</p>
              <img src={item.thumbnail} ref={this.image}/>
              <button onClick={handleAddItem}>Add item</button>
            </div>
          ))
        : <p>Search for an item to find listings!</p>}
    </div>
  );
};

export default SearchItem;
