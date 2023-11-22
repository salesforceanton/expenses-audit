import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import RegistrationForm from '../../components/registration/registrationForm/RegistrationForm';
import RegistrationFormError from '../../components/common/formError/FormError';
import styles from './RegistrationPage.module.css';
import Messages from '../../components/common/messages/Messages';

import { 
    authStateActions,
    localStorageAuthState
} from '../../store/auth/public-api';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
    const createUserSuccesssCallback = (userData) => () => {
        localStorage.setItem(localStorageAuthState, true);
        dispatch(authStateActions.logIn());

        setSuccessMessage(`User ${userData.username} has been created!`);
        setShowSuccessMessage(true);

        navigate('/main');

        window.setTimeout(() => {
            setShowSuccessMessage(false);
            setSuccessMessage('');
        }, 3000)
    }

    const createUserHandler = (userData) => {
        dispatch(authStateActions.signUp({ 
            userData, 
            successCallback: createUserSuccesssCallback(userData)
        }));
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