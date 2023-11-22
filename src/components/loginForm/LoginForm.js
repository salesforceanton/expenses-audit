import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import styles from './LoginForm.module.css';
import Card from '../common/card/Card';
import PasswordInput from '../common/passwordInput/PasswordInput';

const LoginForm = (props) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const reportFormValidity = () => {
        const errorMessage = 
            !emailRegex.test(email)       ? 'Please enter correct Email address' :
            !passwordRegex.test(password) ? 'Password is incorrect'              : null

        if (errorMessage) {
            props.onFormError(errorMessage);
            return false;
        }
        return true;
    }

    const changeEmailHandler = (e) => setEmail(e.target.value);
    const changePasswordHandler = (e) => setPassword(e.target.value);
    const submitHandler = (e) => {
        e.preventDefault();
        if (!reportFormValidity()) {
            return;
        }
        const userData = { password, email };
        props.onLogin(userData);
    }
    return (
        <Card className={styles['form-wrapper']}>
            <div className='card-header'> 
                <h2>Login <FontAwesomeIcon icon={faCoffee} /></h2>
            </div>
            <form>
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
                <div className='buttons-block'>
                    <button className={styles['submit-button']} onClick={submitHandler}>Sign In with Email</button>
                </div>
            </form>
        </Card>
    )
}

export default LoginForm;