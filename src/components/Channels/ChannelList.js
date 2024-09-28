import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const ChannelList = ({ onSelectChannel }) => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'channels'), (snapshot) => {
            const channelData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setChannels(channelData);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h3>Channels</h3>
            {channels.map(channel => (
                <div key={channel.id} onClick={() => onSelectChannel(channel.id)}>
                    #{channel.name}
                </div>
            ))}
        </div>
    );
};

export default ChannelList;