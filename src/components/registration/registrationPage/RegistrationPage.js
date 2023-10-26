import React, { useState } from 'react';

import RegistrationForm from '../registrationForm/RegistrationForm';
import RegistrationFormError from '../registrationFormError/RegistrationFormError';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
    const [showFormError, setShowFormError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const closeErrorHandler = () => {
        setShowFormError(false);
        setErrorMessage('');
    }
    const formErrorHandler = (message) => {
        setErrorMessage(message);
        setShowFormError(true);
    }

    return (
        <div className={styles['page-wrapper']}>
            <RegistrationFormError 
                onClose={closeErrorHandler} 
                show={showFormError}
                message={errorMessage}
            />
            <div className={styles['registration-form__wrapper']}>
                <RegistrationForm onFormError={formErrorHandler}/>
            </div>
        </div>
    );
}

export default RegistrationPage;