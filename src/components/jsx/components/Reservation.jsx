import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/components/reservation.css'
import { useNavigate } from 'react-router-dom';

function Reservation({ clientID }) {
    const [tariffID, setTariffID] = useState(1); // Тариф +
    const [paymentType, setPaymentType] = useState('Credit Card'); // Тип оплаты +
    const [orderTime, setOrderTime] = useState(new Date(Date.now())); // Время резервации - текущее
    const [workspaceId, setWorkspaceId] = useState(1); // Рабочая станция - 1, 7 или 21
    const [orderStatus, setOrderStatus] = useState('refusual'); // Ставим refusual
    const [orderPrice, setOrderPrice] = useState(''); // Зависит от тарифа + 
    const [orderType, setOrderType] = useState('Console'); // Console или Standard PC
    const [orderHours, setOrderHours] = useState(); // Количество часов
    const [employeeID, setEmployeeID] = useState(16); // Работник(ставим 16)
    const [summa, setSumma] = useState(0); // Сумма = orderHours * orderPrice = количество часов * цена
    const [clientId, setClientId] = useState(clientID); // clientID текущего пользователя
    const [orderForm, setOrderForm] = useState('request'); // Ставим request

    const navigate = useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!orderHours) {
            alert("Введіть кількість годин");
            return
        }

        try {
            const response = await axios.post('http://localhost:5000/post-reservation', {
                tariffID: tariffID, // +
                paymentType: paymentType, // +
                orderTime: orderTime, // +
                workspaceId: workspaceId, // +
                orderStatus: orderStatus, // +
                orderPrice: orderPrice, // +
                orderType: orderType, // +
                orderHours: orderHours, // +
                employeeID: 16, // +
                clientID: clientID, // +
                orderForm: "request", // +
            });

            if (response.data.error) {
                setError(response.data.error);
            } else {
                navigate('/');
                alert("Резервація пройшла успішно, чекаємо вас!")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleCancel = () => {
        navigate('/');
    }

    const handleTariffChange = (event) => {
        const tariffID = event.target.value;
        setTariffID(tariffID);

        axios.get('http://localhost:5000/get-order-price', {
            params: {
                tariffID: tariffID,
            }
        })
            .then((response) => {
                setOrderPrice(response.data);
            });
    }

    useEffect(() => {
        setSumma(orderHours * orderPrice);
    }, [tariffID, orderHours])

    useEffect(() => {
        const setOrderPriceData = async () => {
            const result = await axios.get('http://localhost:5000/get-order-price',
                {
                    params: {
                        tariffID: tariffID,
                    }
                });
            setOrderPrice(result.data);
        }
        setOrderPriceData();
    }, [tariffID])

    return (
        <div className='reservation'>
            {/* <form onSubmit={handleSubmit}> */}
            <form >
                <div className='reservation-form'>
                    <div className='reservation-form-left'>
                        <label htmlFor="id_tariff">Тариф: </label>
                        <select id='id_tariff' value={tariffID} onChange={handleTariffChange}>
                            <option value="1">Нічний</option>
                            <option value="2">Ранковий</option>
                            <option value="3">Денний</option>
                            <option value="4">Вечірній</option>
                            <option value="5">Цілодобовий</option>
                            <option value="6">Погодинно</option>
                        </select>

                        <label>Ціна тарифу </label>
                        <input readOnly value={orderPrice} />

                        <label>Тип оплати </label>
                        <select id='payment_type' value={paymentType} onChange={e => setPaymentType(e.target.value)}>
                            <option value="Credit Card">Картка</option>
                            <option value="Cash">Готівка</option>
                        </select>
                    </div>
                    <div className='reservation-form-right'>
                        <label>Тип зали </label>
                        <select id='order_type' value={orderType} onChange={e => setOrderType(e.target.value)}>
                            <option value="Console">Консоль</option>
                            <option value="Standard PC">Комп'ютер</option>
                        </select>

                        <label>Тип ПК </label>
                        <select id='workspace_id' value={workspaceId} onChange={e => setWorkspaceId(e.target.value)}>
                            <option value="1">Не ПК</option>
                            <option value="1">Звичайний Linux</option>
                            <option value="7">Звичайний Windows</option>
                            <option value="21">ВІП Windows</option>
                        </select>

                        <label>Кількість годин </label>
                        <input type='order_hours' value={orderHours} onChange={e => setOrderHours(e.target.value)} />
                    </div>
                </div>

                <button className='reservation-form-submit' onClick={handleSubmit}>Зарезервувати</button>
                <button className='reservation-form-cancel' onClick={handleCancel}>Відмінити</button>
            </form>
        </div>
    )
}

export default Reservation;
