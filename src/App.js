import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from "react-router-dom";

import LoadingSpinner from './components/common/spinner/Spinner';
import MainPage from './pages/mainPage/MainPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';

import { 
    mainStateSelectors
} from './store/main/public-api';

function App() {
    const isLoading = useSelector(mainStateSelectors.selectIsLoading);

    return (
        <React.Fragment>
            <LoadingSpinner show={isLoading} />
            <Routes>
                <Route exact path="/" element={<Navigate replace to="/main" />} />
                <Route path="/main" element={<MainPage/>} />
                <Route path="/sign-up" element={<RegistrationPage/>} />
            </Routes>
        </React.Fragment> 
    )
}

export default App;
