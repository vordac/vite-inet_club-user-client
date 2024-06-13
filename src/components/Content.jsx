import React, { useEffect, useState } from 'react'
import ItemTariff from '../../items/admin/ItemTariff';
import axios from 'axios';
import Swal from 'sweetalert2';
import './css/list.css';
import { icon } from '@fortawesome/fontawesome-svg-core';

function TariffList({ update, setUpdate }) {
    const [error, setError] = useState(null);
    const [tariffs, setTariffs] = useState(null);
    const [name_tariff, setNameTariff] = useState('');
    const [price_tariff, setPriceTariff] = useState('');

    useEffect(() => {
        async function fetchTariff() {
            try {
                const response = await axios.get('http://localhost:5001/get-tariff');
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
            <div className='grid'>
                {
                    Array.isArray(tariffs) && tariffs.map((tariffs) => (
                        <ItemTariff
                            tariff={{ ...tariffs }}
                            update={update}
                            setUpdate={setUpdate}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TariffList;
