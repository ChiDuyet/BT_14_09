import React, { useState } from 'react';

const Message = ({ message }) => {
    const [reactions, setReactions] = useState(message.reactions || []);

    const handleReaction = (emoji) => {
        const newReactions = [...reactions, emoji];
        setReactions(newReactions);
        // Cập nhật vào Firestore nếu cần
    };

    return (
        <div style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <p>{message.text}</p>
            <div>
                {['😀', '😂', '😍', '😢'].map(emoji => (
                    <span key={emoji} onClick={() => handleReaction(emoji)} style={{ cursor: 'pointer', margin: '0 5px' }}>
                        {emoji}
                    </span>
                ))}
            </div>
            <div>
                {reactions.map((emoji, index) => (
                    <span key={index}>{emoji}</span>
                ))}
            </div>
        </div>
    );
};

export default Message;