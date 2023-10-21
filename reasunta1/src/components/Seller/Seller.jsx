
import React, { useState } from 'react';
import InputEl from '../InputEl/InputEl'
import ItemsList from '../ItemsList/ItemsList'
import { useOrderContext } from '../../OrderContext';

const Seller = () => {
    const [items, setItems] = useState([]);
    const { confirmed } = useOrderContext();

    
    const handleAddItem = (item) => {
      const newItems = [...items, item];
      setItems(newItems);
      localStorage.setItem('items', JSON.stringify(newItems));
      };
    

  return (
    <div>
        <InputEl onAddItem={handleAddItem} />
        <ItemsList items={items} setItems={setItems}/>
        {confirmed && <p style={{ color: 'green', fontWeight: 'bold' }} >Confirmed!</p>}  
    </div>
  )
}

export default Seller



//import WebSocket from 'ws'

  //const [lastMessage, setLastMessage] = useState(null)
// useEffect(() => {
    //   const ws = new WebSocket('wss://echo.websocket.org')
    //   const handleMessage = (e) => {
    //     const message = JSON.parse(e.data)
    //     setLastMessage(message)
    //   }
    //     ws.addEventListener('message', handleMessage)
    //     return () => {
    //       ws.removeEventListener('message', handleMessage)
    //       ws.close()
        
    //   }
    // }, [])

    // const handleClick = () => {
    //   ws.send(JSON.stringify({
    //     text: 'Hello!'
    //   }))
    // }

/* <button onClick={handleClick}>Send Message</button>
      {lastMessage? <p>Last Message: {lastMessage.text}</p>:''} */