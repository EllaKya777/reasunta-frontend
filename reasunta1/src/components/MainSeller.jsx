
import React, { useState } from 'react';
import InputEl from '../assets/InputEl'
import ItemSearch from '../assets/ItemSearch';
import ItemsList from '../assets/ItemsList'
import { useOrderContext } from '../OrderContext';

const MainSeller = () => {
    const [items, setItems] = useState([]);
    const { confirmed } = useOrderContext();

    const handleAddItem = (item) => {
      const newItems = [...items, item];
      setItems(newItems);
      localStorage.setItem('items', JSON.stringify(newItems));
      };
      
      

  return (
    <main className='container'>
      <ItemSearch />
        <InputEl onAddItem={handleAddItem} />
        <ItemsList items={items}/>
        {confirmed && <p>Confirmed!</p>}
        <button style={{ maxWidth: '50%', margin: '0 auto'}}
      >SEND ORDER</button>
      
    </main>
  )
}

export default MainSeller
