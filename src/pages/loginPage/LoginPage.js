import React, { useState } from 'react';

import styles from './LoginPage.module.css';
import Messages from '../../components/common/messages/Messages';
import FormError from '../../components/common/formError/FormError';
import LoginForm from '../../components/loginForm/LoginForm';

const RegistrationPage = () => {
    const [showFormError, setShowFormError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const closeErrorHandler = () => {
        setShowFormError(false);
        setErrorMessage('');
    }
    const formErrorHandler = (message) => {
        setErrorMessage(message);
        setShowFormError(true);
    }
    const loginHandler = ({ username }) => {
        setSuccessMessage(`User ${username} has been created!`);
        setShowSuccessMessage(true);

        window.setTimeout(() => {
            setShowSuccessMessage(false);
            setSuccessMessage('');
            window.location = '/';
        }, 3000)
    }

    return (
        <div className={styles['page-wrapper']}>
            <Messages 
                show={showSuccessMessage}
                variant='success' 
                message={successMessage} 
                className={styles['success-toast']}
            />
            <FormError 
                onClose={closeErrorHandler} 
                show={showFormError}
                message={errorMessage}
            />
            <div className={styles['login-form__wrapper']}>
                <LoginForm onFormError={formErrorHandler} onLogin={loginHandler}/>
            </div>
        </div>
    );
}

export default RegistrationPage;