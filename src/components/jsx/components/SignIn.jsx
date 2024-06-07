import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/components/sign-in.css'

function SignIn({ setClientID }) {
    const [pib, setPib] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/post-sign-in', {
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

    const handleSignUp = () => {
        navigate('/sign-up');
    }

    return (
        <div className='sign-in'>
            <p>Авторизація</p>
            <form className='sign-in-form'>
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
                <button onClick={handleSignIn} className='sign-in-form-signin'>Увійти</button>
                <button onClick={handleSignUp} className='sign-in-form-signup'>Ще немає акаунту?</button>
            </form>
        </div>
    );
}

export default SignIn;