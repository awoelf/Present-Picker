import React, { useState } from 'react';

// Accepts the list id, list name, and number of items in list as arguments
const List = (props) => {
    const handleEmailList = () => {
        // Redirect to email page
        // Make sure list id is passed to email page
    }

    const handleEditList = () => {
        // Return to list edit
    }

    const handleDeleteList = () => {
        // Delete list and associated items
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