import React from 'react';
import Editor from '../../components/Editor/Editor';
import MessageList from '../../components/Messages/MessageList';

const ChannelPage = () => {
    return (
        <div>
            <h2>Channel Name</h2>
            <MessageList />
            <Editor />
        </div>
    );
};

export default ChannelPage;