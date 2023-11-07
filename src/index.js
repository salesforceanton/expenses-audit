import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import RegistrationPage from './components/registration/registrationPage/RegistrationPage';


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
        <Routing />
    </React.StrictMode>
);
