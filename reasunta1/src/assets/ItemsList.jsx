// type ItemsListProps = {
//     items: string[];
//   };
  
  const ItemsList = ({ items, setItems }) => {
    const newItems = [...items]
//     const deleteItem = (index) => {
// const filteredItems = newItems.filter((item) => item.index !== index)
// setItems(filteredItems)
//     }
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}
          <button >X</button>
          </li>
        ))}
      </ul>
    );
  };

export default ItemsList

//onClick={deleteItem(index)}