import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ID } from '../../utils/queries';
import { REMOVE_ITEM } from '../../utils/mutations';

// Renders an item for display in a list
// Accepts an item id and list id
const ListItem = async (props) => {
  const [getItem] = useQuery(QUERY_ID);
  const [removeItem, { error }] = useMutation(REMOVE_ITEM);

  // Load item from props.itemId
  const loadItem = await getItem({
    variables: { listId: props.listId, itemId: props.itemId },
  });
  const [item, setItem] = useState(loadItem);

  // Handler for editing the item
  const handleEditItem = () => {
    // OPEN MODAL AND PASS THIS ITEM'S ID
  }

  // Handler for deleting the item
  const handleDeleteItem = async () => {
    await removeItem({
      variables: { itemId: props.itemId, listId: props.listId }
    })
  }

  // Conditionally render item details
  // Uses bootstrap Accordion to hide extra details
  return (
    <div>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            <p>item name: {item.itemName}</p>
            {item.price ? <p>price: {item.price}</p> : null}
            {/* If the list is for email, do not display the edit and delete buttons */}
            {props.isEmail
            ? null
            :  <div>
              <button onClick={handleEditItem}><i class="bi bi-pencil"></i></button>
              <button onClick={handleDeleteItem}><i class="bi bi-trash"></i></button>
            </div>}
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
