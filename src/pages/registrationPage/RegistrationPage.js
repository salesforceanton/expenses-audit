import React, { useState } from 'react';

import RegistrationForm from '../../components/registration/registrationForm/RegistrationForm';
import RegistrationFormError from '../../components/registration/registrationFormError/RegistrationFormError';
import styles from './RegistrationPage.module.css';
import Messages from '../../components/common/messages/Messages';

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
    const createUserHandler = ({ username }) => {
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
            <RegistrationFormError 
                onClose={closeErrorHandler} 
                show={showFormError}
                message={errorMessage}
            />
            <div className={styles['registration-form__wrapper']}>
                <RegistrationForm onFormError={formErrorHandler} onCreateUser={createUserHandler}/>
            </div>
        </div>
    );
}

export default RegistrationPage;