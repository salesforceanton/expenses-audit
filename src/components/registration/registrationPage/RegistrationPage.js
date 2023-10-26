import React, { useState } from 'react';

import RegistrationForm from '../registrationForm/RegistrationForm';
import RegistrationFormError from '../registrationFormError/RegistrationFormError';
import styles from './RegistrationPage.module.css';
import Messages from '../../common/messages/Messages';

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
    const createUserHanler = ({ username }) => {
        setSuccessMessage(`User ${username} has been created!`);
        setShowSuccessMessage(true);

        window.setTimeout(() => {
            setShowSuccessMessage(false);
            setSuccessMessage('');
            window.location = '/home';
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
            <RegistrationFormError 
                onClose={closeErrorHandler} 
                show={showFormError}
                message={errorMessage}
            />
            <div className={styles['registration-form__wrapper']}>
                <RegistrationForm onFormError={formErrorHandler} onCreateUser={createUserHanler}/>
            </div>
        </div>
    );
}

export default RegistrationPage;