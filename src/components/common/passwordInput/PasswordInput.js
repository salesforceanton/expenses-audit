import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './PasswordInput.module.css';

const PasswordInput = (props) => {
    const [inputType, setInputType] = useState('password') 
    const icon = (inputType === 'password') ? faEye : faEyeSlash;
    const inputToggleClassname = (inputType === 'password') 
        ? `${styles['active']} ${styles['input-control__toggle']}`
        : `${styles['input-control__toggle']}`;
    
    const toggleInputType = () => {
        setInputType((prevState) => {
            return (prevState === 'password') ? 'text' : 'password';
        })
    }
    return (
        <div>
            <div className={styles['input-control']}>
                <label>Password</label>
                <div className={inputToggleClassname}>
                    <span>{(inputType === 'password') ? 'Show' : 'Hide'}</span> 
                    <FontAwesomeIcon icon={icon} onClick={toggleInputType} style={{cursor: 'pointer'}}/>
                </div>
            </div>
            <input 
                type={inputType} 
                value={props.value} 
                onChange={props.onChange}
            />
            <ul className={styles.description}>
                <li>6 or more characters</li>
                <li>One number</li>
                <li>One letter</li>
                <li>One special character</li>
            </ul>
        </div>
    );
}

export default PasswordInput;