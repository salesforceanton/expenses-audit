import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import styles from './AppHeader.module.css';

import { 
    authStateActions,
    localStorageAuthState
} from '../../store/auth/public-api';

const AppHeader = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlLogOut = () => {
        localStorage.removeItem(localStorageAuthState);
        dispatch(authStateActions.logOut);
        navigate('/sign-up');
    }

    return (
        <div className={styles['app-header']}>
            <h2>Expenses Audit  <FontAwesomeIcon icon={faCoffee} /></h2>
            <div className={styles['header-buttons']}>
                {props.showNewButton && 
                    <button className={styles['open-modal-button']} onClick={props.openNewCostModalHandler}>Add new cost</button>
                }
                <button className={styles['log-out-button']} onClick={handlLogOut}>Log Out</button>
            </div>
        </div>
    );
}

export default AppHeader;