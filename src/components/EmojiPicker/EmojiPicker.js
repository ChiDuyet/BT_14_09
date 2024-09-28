import React from 'react';

const EmojiPicker = ({ onSelect }) => {
    const emojis = ['😀', '😂', '😍', '😢'];

    return (
        <div>
            {emojis.map(emoji => (
                <span key={emoji} onClick={() => onSelect(emoji)}>{emoji}</span>
            ))}
        </div>
    );
};

export default EmojiPicker;