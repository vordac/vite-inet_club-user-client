import React from 'react'

function ConsoleItem({ console }) {

    return (
        <div>
            <p>Console ID: {console.console_id}</p>
            <p>Console Workspace ID: {console.console_workspace_id}</p>
            <p>Console Type: {console.console_type}</p>
            <p>Console Status: {console.console_status}</p>
        </div>
    );
}

export default ConsoleItem;
