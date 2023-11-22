import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons' 

import styles from './FormError.module.css';
import Modal from "../modal/Modal";

const FormError = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <Modal show={props.show} onBackdropClick={props.onClose}>
            <div className={styles['error-content__wrapper']}>
                <div className={styles['message-content']}>
                    <FontAwesomeIcon className={styles['message-icon']} icon={faTriangleExclamation}/>
                    <p className={styles['error-action']}>Oh snap!</p>
                    <p>{props.message}</p>
                </div>
                <button 
                    className={styles['cancel-button']} 
                    onClick={props.onClose}
                >
                        Dismiss
                </button>
            </div>
        </Modal>
    )
}

export default FormError;