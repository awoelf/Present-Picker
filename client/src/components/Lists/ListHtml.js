import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SINGLE_LIST } from '../../utils/queries';

const ListHtml = async (props) => {
    const [getSingleList] = useQuery(QUERY_SINGLE_LIST);
    const loadList = await getSingleList({
        variables: { listId: props.listId }
    })

    const [list, setList] = useState(loadList);
    const [theme, setTheme] = useState(list.theme);

    // IMPLEMENT STYLES 
    return(
        <div>
            <h1>{list.title}</h1>
            <p>{list.description}</p>
            {list.items
            ? list.items.map((item) => {
                <ListItem id={item.id} itemId={item.id} />
            })
            : null
            }
            <p>Created with Present Picker</p>
        </div>
    );
};

export default ListHtml;

