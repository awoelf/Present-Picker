import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ID } from '../../utils/queries';
import { ADD_ITEM, UPDATE_ITEM } from '../../utils/mutations';

// This component is for the user to manually input values for an item they will add to the list.
// props will contain the list id and item id (if being edited)
const InputItem = async (props) => {
  const [item, setItem] = useState('');
  const [itemName, setItemName] = useState('');
  const [retailer, setRetailer] = useState('');
  const [link, setLink] = useState('');
  const [quantity, setQuantity] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const getItem = useQuery(QUERY_ID);
  const addItem = useMutation(ADD_ITEM);
  const updateItem = useMutation(UPDATE_ITEM);

  // If the item is being edited, load existing values
  if (props.itemId) {
    // Query getItem to get the values of the item that matches the itemId
    const loadItem = await getItem({
      variables: { listId: props.listId, itemId: props.itemId },
    });

    // Set item values
    setItem(loadItem);
    setItemName(item.itemName);
    setRetailer(item.retailer);
    setLink(item.link);
    setQuantity(item.quantity);
    setColor(item.color);
    setSize(item.size);
    setPrice(item.price);
  }

  const handleInputUpdate = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    switch (inputType) {
      case 'itemName':
        setItemName(inputValue);
      case 'retailer':
        setRetailer(inputValue);
      case 'link':
        setLink(inputValue);
      case 'quantity':
        setQuantity(inputValue);
      case 'color':
        setColor(inputValue);
      case 'size':
        setSize(inputValue);
      case 'price':
        setPrice(inputValue);
    }
  };

  // Called when the item state is changed
  const handleAddItemToList = async () => {
    setItem({ itemName, retailer, link, quantity, color, size, price });

    if (props.itemId) {
      await updateItem({
        variables: { itemId: props.itemId, listId: props.listId, ...item }
      })
    } else {
      await addItem({
        variables: { listId: props.listId },
      });
    }
  };

  return (
    <div
      className='modal show'
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Item name'
              value={itemName}
              onChange={handleInputUpdate}
              name='itemName'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <Form.Label>Retailer</Form.Label>
            <Form.Control
              type='text'
              placeholder='Retailer'
              value={retailer}
              onChange={handleInputUpdate}
              name='retailer'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <Form.Label>Link</Form.Label>
            <Form.Control
              type='text'
              placeholder='Item link'
              value={link}
              onChange={handleInputUpdate}
              name='link'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type='text'
              placeholder='1'
              value={quantity}
              onChange={handleInputUpdate}
              name='quantity'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <Form.Label>Color</Form.Label>
            <Form.Control
              type='text'
              placeholder='Item color'
              value={color}
              onChange={handleInputUpdate}
              name='color'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <Form.Label>Size</Form.Label>
            <Form.Control
              type='text'
              placeholder='Item size'
              value={size}
              onChange={handleInputUpdate}
              name='size'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <Form.Label>Price</Form.Label>
            <InputGroup.Text id='dollar'>$</InputGroup.Text>
            <Form.Control
              type='text'
              placeholder='Item price'
              value={price}
              onChange={handleInputUpdate}
              name='price'
              aria-describedby='dollar'
            />
          </InputGroup>
          <button onClick={handleAddItemToList}>Add Item</button>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InputItem;
