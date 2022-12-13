import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

// Component for choosing to input item details manually or search for item
const AddItem = ({ show, setShow, itemId, listId }) => {
  const handleClose = () => setShow(false);

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
      <Button className='mb-3 bg-black' onClick={decoratedOnClick}>
        {children}
      </Button>
    );
  }

  function InputField({ content }) {
    return (
      <div className='d-flex flex-nowrap text-nowrap align-items-center w-100 my-1'>
        <Form.Label className='me-2 w-25'>{content}</Form.Label>
        <Form.Control type='text' placeholder={content} name={content} />
      </div>
    );
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Accordion>
            <CustomToggle eventKey='0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-gift'
                viewBox='0 0 16 16'
              >
                <path d='M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z' />
              </svg>{' '}
              Search for an item
            </CustomToggle>{' '}
            <Accordion.Collapse eventKey='0'>
              <InputGroup className='mb-3'>
                <Form.Control
                  type='text'
                  placeholder='Search for presents'
                  name='searchQuery'
                />
                <Button className='bg-black'>Search</Button>
                <Container>
                  <p>Search for an item to find listings!</p>
                </Container>
              </InputGroup>
            </Accordion.Collapse>
            <br></br>
            <CustomToggle eventKey='1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-ui-checks-grid'
                viewBox='0 0 16 16'
              >
                <path d='M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z' />
              </svg>{' '}
              Input item details
            </CustomToggle>
            <Accordion.Collapse eventKey='1'>
              <div>
                <InputGroup className='mb-3 align-items-center justify-content-center'>
                  <InputField content='Item name' />
                  <InputField content='Retailer' />
                  <InputField content='Link' />
                  <InputField content='Quantity' />
                  <InputField content='Color' />
                  <InputField content='Size' />
                  <InputField content='Price' />
                </InputGroup>
                <Button className='bg-black'>Add Item</Button>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AddItem;
