// Import list style sheet

const ListHtml = (listId) => {
    // Get list from list id
    // const list = ...

    // Returns formatted list with items for email message
    // Needs styling and list styles
    return(
        <div>
            <h1>{list.title}</h1>
            <p>{list.description}</p>
            {list.items
            ? list.items.map((itemId) => {
                <ListItem id={itemId} itemId={itemId} />
            })
            : null
            }
            <p>Created with Present Picker</p>
        </div>
    );
};

export default ListHtml;

