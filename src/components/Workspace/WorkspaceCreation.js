import React, { useState } from 'react';
import { db } from '../../utils/firebase';

const WorkspaceCreation = () => {
    const [workspaceName, setWorkspaceName] = useState('');

    const createWorkspace = () => {
        db.collection('workspaces').add({
            name: workspaceName,
        });
        setWorkspaceName('');
    };

    return (
        <div>
            <input 
                type="text" 
                value={workspaceName} 
                onChange={(e) => setWorkspaceName(e.target.value)} 
                placeholder="Workspace Name" 
            />
            <button onClick={createWorkspace}>Create Workspace</button>
        </div>
    );
};

export default WorkspaceCreation;