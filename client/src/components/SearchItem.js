import getSearchResults from '../utils/shopping';

// Accepts the item search term as query
const SearchItem = () => {
  // for testing, searches for blanket
  const results = getSearchResults('blanket');

  return results.map((item) => (
        <div>
          <p>item name: {item.title}</p>
          <p>link: {item.link}</p>
          <p>retailer: {item.source}</p>
          <p>price: {item.extracted_price}</p>
          <p>details: {item.extensions}</p>
          <img src={item.thumbnail} />
          <btn>Add item</btn>
        </div>
      ))
}

export default SearchItem;
