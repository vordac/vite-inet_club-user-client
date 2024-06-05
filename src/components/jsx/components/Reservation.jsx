import React from 'react'
import '../../css/components/reservation.css'

function Reservation() {

    const handleSubmit = () => {
        alert('Резервацію було зроблено');
    }

    return (
        <div className='reservation'>
            <form onSubmit={handleSubmit}>
                <input placeholder='Зала' />
                <input placeholder='Робоча станція' />
                <button type='submit'>Зарезервувати</button>
            </form>
        </div>
    )
}

export default Reservation;
