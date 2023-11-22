import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import styles from './RegistrationForm.module.css';
import Card from '../../common/card/Card';
import PasswordInput from '../../common/passwordInput/PasswordInput';

const RegistrationForm = (props) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const reportFormValidity = () => {
        const errorMessage = 
            !username.trim().length       ? 'User Name should be populated'      :
            !emailRegex.test(email)       ? 'Please enter correct Email address' :
            !passwordRegex.test(password) ? 'Password is incorrect'              : null

        if (errorMessage) {
            props.onFormError(errorMessage);
            return false;
        }
        return true;
    }
    const changeUsernameHandler = (e) => setUsername(e.target.value);
    const changeEmailHandler = (e) => setEmail(e.target.value);
    const changePasswordHandler = (e) => setPassword(e.target.value);
    const submitHandler = (e) => {
        e.preventDefault();
        if (!reportFormValidity()) {
            return;
        }
        const userData = { username, password, email };
        props.onCreateUser(userData);
    }
    return (
        <Card className={styles['form-wrapper']}>
            <div className='card-header'> 
                <h2>Create an Account <FontAwesomeIcon icon={faCoffee} /></h2>
            </div>
            <form>
                <div>
                    <label>User Name</label>
                    <input 
                        type='text' 
                        value={username} 
                        onChange={changeUsernameHandler}
                    />
                </div>
                <div>
                    <label>Email address</label>
                    <input 
                        type='text' 
                        value={email} 
                        onChange={changeEmailHandler}
                      
                    />
                </div>
                <div>
                    <PasswordInput 
                        value={password} 
                        onChange={changePasswordHandler}
                    />
                </div>
                <div className={styles['buttons-block']}>
                    <button className={styles['submit-button']} onClick={submitHandler}>Sign Up with Email</button>
                </div>
                <div className={styles['login-link']}>
                    Or You already have an <Link to='/sign-in'>Account</Link>
                </div>
            </form>
        </Card>
    )
}

export default RegistrationForm;