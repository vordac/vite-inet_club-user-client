import React from 'react'
import '../../css/items/console-item.css'


function ConsoleItem({ console }) {

    return (
        <div className='console-item'>
            <p><b>Консоль №:</b> {console.console_id}</p>
            <p><b>Тип консолі:</b> {console.console_type}</p>
            <p><b>Статус консолі:</b> {console.console_status}</p>
        </div>
    );
}

export default ConsoleItem;
