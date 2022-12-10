import React, { useState, useEffect } from 'react';
import getSearchResults from '../../utils/shopping';
import Result from './Result';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ITEM } from '../../utils/mutations';

// props will contain the list id
// If props.itemId is passed, the item will be updated
const SearchItem = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState('');
  const [item, setItem] = useState('');
  const [addItem, { error }] = useMutation(ADD_ITEM);

  useEffect(() => {
    handleAddItemToList();
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
  const handleAddItemToList = async () => {
    if (props.itemId) {
      // UPDATE ITEM
    } else {
      await addItem({
        variables: { listId: props.listId, ...item },
      });
    }
  };

  return (
    <div
      className='modal show'
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <Form.Label>Search for presents</Form.Label>
            <Form.Control
              type='text'
              placeholder='Search for presents'
              value={searchQuery}
              onChange={handleInputUpdate}
              name='searchQuery'
            />
          </InputGroup>
          <button onClick={handleSearchSubmit}>Search</button>
          {results ? (
            results.map((result) => (
              <Result
                id={result.product_id}
                result={result}
                setItem={setItem}
              />
            ))
          ) : (
            <p>Search for an item to find listings!</p>
          )}
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default SearchItem;