import React from 'react'
import '../../css/items/software-item.css'

function SoftwareItem({ software }) {

    return (
        <div className='software-item'>
            <p><b>Програма №:</b> {software.software_id}</p>
            <p><b>Назва програми:</b> {software.software_name}</p>
            <p><b>Операційна система:</b> {software.operating_system}</p>
        </div>
    )
}

export default SoftwareItem;
