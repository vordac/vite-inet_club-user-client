import React from 'react'

function SoftwareItem({ software }) {

    return (
        <div>
            <p>Software ID: {software.software_id}</p>
            <p>Software Name: {software.software_name}</p>
            <p>Operating System: {software.operating_system}</p>
        </div>
    )
}

export default SoftwareItem;
