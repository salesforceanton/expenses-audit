import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons' 

import styles from './RegistrationForm.module.css';
import Card from '../../common/card/Card';
import PasswordInput from '../../common/passwordInput/PasswordInput';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const reportFormValidity = () => {
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
        console.log(userData);
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
                <div className='buttons-block'>
                    <button className={styles['submit-button']} onClick={submitHandler}>Sign Up with Email</button>
                </div>
            </form>


        </Card>
    )
}

export default RegistrationForm;