import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import './css/item.css';

function ItemTariff({ tariff }) {
    const { name_tariff, price_tariff } = tariff;

    return (
        <Card className="item">
            <Card.Text className='item-name'>{name_tariff}</Card.Text>
            <Card.Text className='item-quantity'>{price_tariff}</Card.Text>
        </Card>
    );
}

export default ItemTariff;