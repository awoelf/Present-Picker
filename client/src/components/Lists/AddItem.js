import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Component for choosing to input item details manually or search for item
const AddItem = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleSearchItem = () => {
    handleClose;
    props.showSearchItem(true);
  };

  const handleInputItem = () => {
    handleClose;
    props.showInputItem(true);
  };
  return (
    <div
      className='modal show'
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button onClick={handleSearchItem}>
            <i class='bi bi-gift'></i>Search for an item
          </Button>
          <Button onClick={handleInputItem}>
            <i class='bi bi-ui-checks-grid'></i>Input item details
          </Button>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default AddItem;
