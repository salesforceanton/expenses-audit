import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './LoginPage.module.css';
import FormError from '../../components/common/formError/FormError';
import LoginForm from '../../components/loginForm/LoginForm';

import { 
    authStateActions,
    localStorageAuthState,
    userDoesNotExistError
} from '../../store/auth/public-api';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
    const handleCheckIsUserExist = (userCredentials) => (response) => {
        const isUserExist = !!Object.values(response).find(
            (e) => e.email === userCredentials.email && e.password === userCredentials.password);

        if (isUserExist) {
            localStorage.setItem(localStorageAuthState, true);
            dispatch(authStateActions.logIn());
            navigate('/main');
        } else {
            setErrorMessage(userDoesNotExistError);
        }
    };

    const loginHandler = (userCredentials) => {
        dispatch(authStateActions.processUserLogin(
            handleCheckIsUserExist(userCredentials)
        ));
    }

    return (
        <div className={styles['page-wrapper']}>
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

export default LoginPage;