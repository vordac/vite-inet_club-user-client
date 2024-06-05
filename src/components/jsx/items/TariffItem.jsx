import React from 'react'

function TariffItem({ tariff }) {

    return (
        <div>
            <p>Tariff ID: {tariff.tariff_id}</p>
            <p>Tariff Name: {tariff.tariff_name}</p>
            <p>Tariff Cost: {tariff.tariff_cost}</p>
        </div>
    )
}

export default TariffItem;
