const Result = (props) => {
  // Obtaining item information
  const { title, link, source, extracted_price, thumbnail, extensions } =
    props.result;
  
  // When add item button is clicked, this handler will set the item state to the selected result's details
  const handleAddItem = () => {
    props.setItem({
      title,
      link,
      source,
      extracted_price,
      thumbnail,
      extensions,
    });
  };

  return (
    <div>
      <p>item name: {title}</p>
      <p>link: {link}</p>
      <p>retailer: {source}</p>
      <p>price: {extracted_price}</p>
      <p>details: {extensions}</p>
      <img src={thumbnail} />
      <button onClick={handleAddItem}>Add item</button>
    </div>
  );
};

export default Result;
