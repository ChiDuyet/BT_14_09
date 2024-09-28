import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import Message from './Message';

const MessageList = ({ channelId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'messages'), where('channelId', '==', channelId));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMessages(messagesData);
        });
        return () => unsubscribe();
    }, [channelId]);

    return (
        <div className="message-list">
            {messages.map(message => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    );
};

export default MessageList;