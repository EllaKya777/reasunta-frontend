import { useEffect, useState, useRef } from 'react';
import SockJS from 'sockjs-client/dist/sockjs';
import Stomp from 'stompjs';

const WebSocket = ({reference}) => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        const socket = new SockJS('http://10.224.8.54:8888/ws');
        const client = Stomp.over(socket);

        client.connect({}, () => {
            client.subscribe('/user/notifications', (data) => {
                console.log(data, " RECEIVED MESSAGE")
                const receivedMessage = JSON.parse(data.body);
                setMessage(receivedMessage);
            });

            client.send("/app/payment/" + reference, {});
        });

        // return () => {
        //   client.disconnect();
        // };
    }, []);

    return (
        <div>
            <ul>
                <li key={message.text}>{message.text}</li>
            </ul>
        </div>
    );
};

export default WebSocket;

