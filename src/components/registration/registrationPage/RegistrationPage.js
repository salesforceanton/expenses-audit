import RegistrationForm from '../registrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
    return (
        <div className={styles['page-wrapper']}>
            <div className={styles['registration-form__wrapper']}>
                <RegistrationForm/>
            </div>
        </div>
    );
}

export default RegistrationPage;