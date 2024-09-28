import React, { useState } from 'react';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateChannel = () => {
    const [channelName, setChannelName] = useState('');

    const createChannel = async () => {
        if (channelName.trim()) {
            await addDoc(collection(db, 'channels'), {
                name: channelName,
            });
            setChannelName('');
        }
    };

    return (
        <div>
            <h3>Create a new channel</h3>
            <input 
                type="text" 
                value={channelName} 
                onChange={(e) => setChannelName(e.target.value)} 
                placeholder="Channel name" 
            />
            <button onClick={createChannel}>Create</button>
        </div>
    );
};

export default CreateChannel;