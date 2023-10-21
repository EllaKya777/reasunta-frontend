import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client/dist/sockjs';
import Stomp from 'stompjs';

const WebSocket = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8888/ws');
        const client = Stomp.over(socket);
    
        client.connect({}, () => {
          client.subscribe('/user/notifications', (message) => {
            const receivedMessage = JSON.parse(message.content);
            setMessages((prevMessages) => [...prevMessages, receivedMessage]);
            
          });

          console.log(messages, " RECEIVED MESSAGE")

        //   client.send("/app/payment/" + "REF000005", {});
        });
    
        // return () => {
        //   client.disconnect();
        // };
      }, []);

    return (
        <div>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>{message.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocket;

