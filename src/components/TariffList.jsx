import React, { useEffect, useState } from 'react'
import ItemTariff from './ItemTariff';
import axios from 'axios';
import './css/list.css';

function TariffList() {
    const [error, setError] = useState(null);
    const [tariffs, setTariffs] = useState(null);

    useEffect(() => {
        async function fetchTariff() {
            try {
                const response = await axios.get('http://localhost:5000/get-tariff');
                setTariffs(response.data);
            } catch (error) {
                tariffs.error('Error fetching tariff:', error);
                setError('Error fetching tariff');
            }
        }

        fetchTariff();
    }, []);

    if (error) {
        return <div>Помилка: {error}</div>;
    }

    if (!tariffs) {
        return <div>Завантаження...</div>;
    }

    return (
        <div className='tariff'>
            <div className='list'>
                {
                    Array.isArray(tariffs) && tariffs.map((tariffs) => (
                        <ItemTariff
                            tariff={{ ...tariffs }}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TariffList;
