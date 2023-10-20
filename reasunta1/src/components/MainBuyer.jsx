import React, { useEffect, useState } from "react";
import ItemsList from "../assets/ItemsList"
import { useOrderContext } from "../OrderContext";


const MainBuyer = () => {
   const [items, setItems] = useState([]);
   // console.log(items);
    
   useEffect(() => {
    // Retrieve the items array from local storage
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);
   // const { items, setConfirmed } = useOrderContext();
   const { setConfirmed } = useOrderContext();
console.log(items);

    const confirmOrder = () => {
        setConfirmed(true);
// Clear the local storage
localStorage.removeItem('items');
    
// Reset the items state to an empty array
setItems([]);
      };

      
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        {items.length !== 0 && 
        <>
      <ItemsList items={items}/>      
      <button onClick={confirmOrder}>Confirm Order</button>  
      </>
        }    
    </div>
  )
}

export default MainBuyer
