import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import TariffList from './components/TariffList';

function App() {

  function handleReservation() {
    Swal.fire({
      title: 'Введіть номер телефону',
      input: 'text',
      inputPlaceholder: 'Ваш номер телефону',
      inputAttributes: {
        maxlength: 15
      },
      showCancelButton: true,
      confirmButtonText: 'Підтвердити',
      cancelButtonText: 'Скасувати'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const phoneNumber = result.value;
        const response = await axios.post('http://localhost:5000/post-notification', {
          phone: phoneNumber
        });
      }
    });
  }


  return (
    <div className='index'>
      <div className='index-logo'>
        <p>INET</p>
        <p>CLUB</p>
      </div>


      <div className='index-tariffs'>
        <TariffList />
      </div>

      <div className='index-links'>
        <button>вул. Академіка Корольова 5/2</button>
      </div>

      <div className='index-reservation'>
        <button onClick={handleReservation}>ЗАРЕЗЕРВУВАТИ</button>
      </div>
    </div>
  )
}

export default App
