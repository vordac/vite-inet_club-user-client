import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/components/header.css'

function Header({ setTab, clientID }) {

    const navigate = useNavigate();

    const handleFirstTab = () => {
        setTab(1);
    }

    const handleSecondTab = () => {
        setTab(2);
    }

    const handleThirdTab = () => {
        setTab(3);
    }

    const handleFourthTab = () => {
        setTab(4);
    }

    const handleFifthTab = () => {
        setTab(5);
    }

    const handleReservation = () => {
        navigate('/reservation')
    }

    const handleSignIn = () => {
        navigate('/sign-in');
    }

    const handleSignUp = () => {
        navigate('/sign-up');
    }

    const handleLogout = () => {
        localStorage.removeItem("clientID");
        navigate('/');
        setTab(2);
    }

    if (clientID) {
        return (
            <div className='header'>
                <div className='header-logo'>
                    <p>inet_club</p>
                </div>
                <div className='header-controls'>
                    <button onClick={handleReservation}>Резервація</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleSecondTab}>Комп'ютери</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleThirdTab}>Консолі</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleFourthTab}>Програми</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleFifthTab}>Таріфи</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleLogout}>Вийти</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='header'>
                <div className='header-logo'>
                    <p>inet_club</p>
                </div>
                <div className='header-controls'>
                    <button onClick={handleSecondTab}>Комп'ютери</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleThirdTab}>Консолі</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleFourthTab}>Програми</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleFifthTab}>Таріфи</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleSignIn}>Вхід</button>
                    <div className='header-controls-divider'></div>
                    <button onClick={handleSignUp}>Реєстрація</button>
                </div>
            </div>
        )
    }
}

export default Header;
