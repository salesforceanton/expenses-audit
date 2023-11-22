import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";

import LoadingSpinner from './components/common/spinner/Spinner';
import MainPage from './pages/mainPage/MainPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';
import LoginPage from './pages/loginPage/LoginPage';

import { rootStateSelectors } from './store/root/public-api';
import { authStateActions } from './store/auth/public-api';

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
       
    const isLoading = useSelector(rootStateSelectors.selectIsLoading);

    useEffect(() => {
        const handleIsLogged = () => navigate("/sign-up");
        dispatch(authStateActions.checkIsLoggedIn((location.pathname !== '/sign-in') ? handleIsLogged : null))
    }, [dispatch, navigate])

    return (
        <React.Fragment>
            <LoadingSpinner show={isLoading} />
            <Routes>
                <Route exact path="/" element={<Navigate replace to="/main" />} />
                <Route path="/main" element={<MainPage/>} />
                <Route exact path="/sign-up" element={<RegistrationPage/>} />
                <Route path="/sign-in" element={<LoginPage/>} />
            </Routes>
        </React.Fragment> 
    )
}

export default App;
