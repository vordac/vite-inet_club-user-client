import React from 'react'
import '../../css/items/computer-item.css'

function ComputerItem({ computer }) {
    return (
        <div className='computer-item'>
            <p><b>Комп'ютер №:</b> {computer.workspace_id}</p>
            <p><b>Процесор:</b> {computer.processor}</p>
            <p><b>Материнка:</b> {computer.motherboard}</p>
            <p><b>Жорсткий диск:</b> {computer.hdd}</p>
            <p><b>Твердотільник диск:</b> {computer.ssd}</p>
            <p><b>Відеокарта:</b> {computer.graphics_card}</p>
            <p><b>Блок живлення:</b> {computer.power_supply}</p>
            <p><b>Оперативна пам'ять:</b> {computer.ram}</p>
            <p><b>Охолодження:</b> {computer.cooling}</p>
        </div>
    );
}

export default ComputerItem;