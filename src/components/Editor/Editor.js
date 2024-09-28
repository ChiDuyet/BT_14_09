import React, { useState } from 'react';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Editor = ({ channelId }) => {
    const [message, setMessage] = useState('');
    const [emoji, setEmoji] = useState('');

    const sendMessage = async () => {
        if (message.trim()) {
            await addDoc(collection(db, 'messages'), {
                text: message + emoji,
                timestamp: new Date(),
                channelId: channelId,
            });
            toast.success('Message sent!');
            setMessage('');
            setEmoji('');
        } else {
            toast.error('Message cannot be empty!');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Type your message..." 
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Editor;