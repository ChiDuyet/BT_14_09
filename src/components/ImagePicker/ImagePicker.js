import React from 'react';

const ImagePicker = ({ onUpload }) => {
    return (
        <input type="file" onChange={onUpload} />
    );
};

export default ImagePicker;