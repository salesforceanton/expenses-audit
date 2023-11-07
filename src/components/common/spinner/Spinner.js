import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Spinner.module.css';

const LoadingSpinner = ({ show }) => {
    if (!show) {
        return null;
    }
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className={styles['spinner-container']}>
                    <div className={styles['loading-spinner']}>
                    </div>
                </div>
                , 
                document.getElementById('overlays')
            )}
        </React.Fragment>
    )
}

export default LoadingSpinner;