import React from 'react'
import '../../css/components/header.css'

function Header({ setTab }) {

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

    return (
        <div className='header'>
            <div className='header-logo'>
                <p>inet_club</p>
            </div>
            <div className='header-controls'>
                <button onClick={handleFirstTab}>Резервація</button>
                <button onClick={handleSecondTab}>Комп'ютери</button>
                <button onClick={handleThirdTab}>Консолі</button>
                <button onClick={handleFourthTab}>Програми</button>
                <button onClick={handleFifthTab}>Таріфи</button>
            </div>
        </div>
    )
}

export default Header;
