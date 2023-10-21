import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client/dist/sockjs';
import Stomp from 'stompjs';

const WebSocket = ({reference}) => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        const socket = new SockJS('http://localhost:8888/ws');
        const client = Stomp.over(socket);

        client.connect({}, () => {
            client.subscribe('/user/notifications', (data) => {
                console.log(data, " RECEIVED MESSAGE")
                const receivedMessage = JSON.parse(data.body);
                setMessage(receivedMessage);
            });

            client.send("/app/payment/" + reference, {});
        });
    }, []);

    return (
        <div>
                <div key={message.text}>{message.text}</div>
        </div>
    );
};

export default WebSocket;

