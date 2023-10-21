
import React, { useState } from 'react';
import InputEl from '../assets/InputEl'
import ItemsList from '../assets/ItemsList'
import QrGenerator from '../assets/QrGenerator';
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
        <InputEl onAddItem={handleAddItem} />
        <ItemsList items={items} setItems={setItems}/>
        {confirmed && <p style={{ color: 'green', fontWeight: 'bold' }} >Confirmed!</p>}  
      <QrGenerator />
     
    </main>
  )
}

export default MainSeller



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