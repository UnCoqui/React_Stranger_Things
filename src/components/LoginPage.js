import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { callApi } from '../api';




const LoginPage = ({ action, setToken, setUserData }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLogin = action === 'login';
    const title = isLogin ? 'Login' : 'Register';
    const oppositeTitle = isLogin ? 'Register' : 'Login';
    const oppositeAction = isLogin ? 'register' : 'login';
    const history = useHistory();
    const [respMessage, setRespMessage] = useState('');  

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = await callApi({
            url: `/users/${action}`,
            body: { user: { username, password } },
            method: 'POST',
        });
        const token = data?.data?.token;

        if (token) {
            localStorage.setItem('token', token);
            setUsername('');
            setPassword('');
            setToken(token);
            history.push('/profile');
        }
        // if you get an error reponse grab the message
        else{ 
            setRespMessage(data.message); 
        }
    };
    return (
        <div id="loginPage">
            <div id="loginInputs">
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                <div><label>Username:</label>
                <input
                    type="text"
                    placeholder="username"
                    required
                    onChange={(event) => setUsername(event.target.value)}
                ></input></div>
                <div><label>Password:</label>
                <input
                    type="password"
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                </div>
                <button type="submit">{title}</button>
            </form>
            {/* display this error message if they don't succesfully login or register */}
            {respMessage ? <div id="errorMessage"> { respMessage }</div> : ''}
            <button><Link to={`/${oppositeAction}`}>{oppositeTitle}</Link></button>
        </div>
    </div>
    );
};

export default LoginPage;