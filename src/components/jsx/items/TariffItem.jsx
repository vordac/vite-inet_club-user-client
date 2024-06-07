import React from 'react'
import '../../css/items/tariff-item.css'

function TariffItem({ tariff }) {

    return (
        <div className='tariff-item'>
            <p><b>Таріф №:</b> {tariff.tariff_id}</p>
            <p><b>Назва таріфу:</b> {tariff.tariff_name}</p>
            <p><b>Вартість таріфу:</b> {tariff.tariff_cost}</p>
        </div>
    )
}

export default TariffItem;
