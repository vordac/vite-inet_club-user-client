import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/components/sign-up.css'

function SignUp({ setClientID }) {
    const [pib, setPib] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/post-sign-up', {
                client_p_i_b: pib,
                client_mobile_number: mobileNumber,
                client_email: email,
            });

            if (response.data.error) {
                setError(response.data.error);
            } else {
                localStorage.setItem('clientID', response.data.clientID);
                setClientID(response.data.clientID);
            }
        } catch (error) {
            console.error(error);
        }
        navigate('/');
    };

    const handleSignIn = () => {
        navigate('/sign-in');
    }

    return (
        <div className='sign-up'>
            <p>Реєстрація</p>
            <form onSubmit={handleSignUp}>
                <input
                    placeholder='ПІБ'
                    value={pib}
                    onChange={(event) => setPib(event.target.value)}
                />
                <input
                    placeholder='Телефон'
                    value={mobileNumber}
                    onChange={(event) => setMobileNumber(event.target.value)}
                />
                <input
                    placeholder='Пошта'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                {error && <p>{error}</p>}
                <button className='sign-up-form-signup' onClick={handleSignUp}>Зареєструватись</button>
                <button className='sign-up-form-signin' onClick={handleSignIn}>Вже є акаунт?</button>
            </form>
        </div>
    );
}

export default SignUp;