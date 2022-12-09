import React, { useState, useEffect } from 'react';
import getSearchResults from '../utils/shopping';

// props will contain the list id
const SearchItem = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState('');
  const [item, setItem] = useState('');

  useEffect(() => {
    handleAddItemToList()
  }, [item]);

  const handleInputUpdate = (e) => {
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

  // Called when the item state is changed
  // 
  const handleAddItemToList = () => {
  }

  return (
    <div>
      <div>
        <label>Search for presents</label>
        <input
          type="text"
          placeholder="Search for presents"
          value={searchQuery}
          onChange={handleInputUpdate}
          name="searchQuery"
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
      {results
        ? results.map((result) => (
            <Result result={result} setItem={setItem}/>
          ))
        : <p>Search for an item to find listings!</p>}
    </div>
  );
};

export default SearchItem;
