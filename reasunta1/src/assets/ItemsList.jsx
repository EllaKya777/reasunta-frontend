
  const ItemsList = ({ items, setItems }) => {
    const newItems = [...items]
    console.log('newItems', newItems);
    console.log('newItems1', Object.keys(newItems));
    const deleteItem = (index) => {
const filteredItems = newItems.filter((item, i) => i !== index)
setItems(filteredItems)
localStorage.setItem('items', JSON.stringify(filteredItems));
    }
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
          <button onClick={()=>deleteItem(index)} >X</button>
          </li>
        ))}
      </ul>
    );
  };

export default ItemsList

