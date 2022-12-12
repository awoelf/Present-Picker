import { useMutation } from '@apollo/client';
import { REMOVE_ITEM } from '../../utils/mutations';

// Component for displaying user lists in dashboard
// Accepts the list id, list name, and number of items in list as arguments
const List = (props) => {
    const RemoveList = useMutation(REMOVE_ITEM);
    const handleEmailList = () => {
        // NAVIGATE TO EMAIL PAGE
        // PASS props.listID
    }

    const handleEditList = () => {
        // NAVIGATE TO LIST PAGE
        // PASS props.listId
    }

    const handleDeleteList = async () => {
        // Delete list and associated items
        await RemoveList({
            variables: { listId: props.listId }
        })
    }

    return (
        <div>
            <p>{props.listName}</p>
            <p>{props.numItems} items</p>
            {/* Buttons do not render properly at the moment */}
            <button onClick={handleEmailList}><i class="bi bi-envelope"></i></button>
            <button onClick={handleEditList}><i class="bi bi-pencil"></i></button>
            <button onClick={handleDeleteList}><i class="bi bi-trash"></i></button>
        </div>
    )
}

export default List;