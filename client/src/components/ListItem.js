import Accordion from 'react-bootstrap/Accordion';

// Renders an item for display in a list
// Accepts an item id
const ListItem = (itemId) => {
  // Add line here that gets the details of the item based on id
  // const item = ...
  // Conditionally render item details
  // Uses bootstrap Accordion to hide extra details
  return (
    <div>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            <p>item name: {item.itemName}</p>
            {item.price ? <p>price: {item.price}</p> : null}
          </Accordion.Header>
          <Accordion.Body>
            {item.retailer ? <p>retailer: {item.retailer}</p> : null}
            {item.link ? <p>link: {item.link}</p> : null}
            {item.quantity ? <p>quantity: {item.quantity}</p> : null}
            {item.size ? <p>size: {item.size}</p> : null}
            {item.color ? <p>color: {item.color}</p> : null}
            {item.details ? <p>details: {item.details}</p> : null}
            {item.image ? <img src={item.image} /> : null}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ListItem;
