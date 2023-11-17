import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import RegistrationPage from './components/registration/registrationPage/RegistrationPage';
import store from './store/index';


const Routing = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route path="sign-up" element={<RegistrationPage/>}/>
            </Routes>
        </Router>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Routing />
        </Provider>
    </React.StrictMode>
);
