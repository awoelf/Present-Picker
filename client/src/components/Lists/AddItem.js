import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Component for choosing to input item details manually or search for item
const AddItem = ({show, setShow}) => {
  const handleClose = () => setShow(false);
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button >
            <i class='bi bi-gift'></i>Search for an item
          </Button>
          <Button >
            <i class='bi bi-ui-checks-grid'></i>Input item details
          </Button>
        </Modal.Body>
      </Modal>
  );
};

export default AddItem;
