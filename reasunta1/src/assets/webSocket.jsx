import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const WebSocket = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/websocket');
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, () => {
            console.log('Connected to STOMP endpoint');

            stompClient.subscribe('/topic/messages', (message) => {
                const data = JSON.parse(message.body);
                setMessages((prevMessages) => [...prevMessages, data]);
            });
        });
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

