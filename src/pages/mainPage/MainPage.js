import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './MainPage.module.css';

import ExpensesList from '../../components/expensesList/ExpensesList';
import NewCostForm from '../../components/newCostForm/NewCostForm';
import Modal from  '../../components/common/modal/Modal';
import AppHeader from '../../components/appHeader/AppHeader';
import Messages from '../../components/common/messages/Messages';

import { 
    addCostSuccessMessage,
    mainStateActions,
    mainStateSelectors
} from '../../store/main/public-api';

function App() {
    const dispatch = useDispatch();
   
    const costData = useSelector(mainStateSelectors.selectCostsData);
    const showSuccessMessage = useSelector(mainStateSelectors.selectShowSuccessMessage);
    const showNewCostModal = useSelector(mainStateSelectors.selectShowNewCostModal)

    useEffect(() => {
        dispatch(mainStateActions.getCosts());
    }, [dispatch]);


    const addCostHandler = (input) => {
        dispatch(mainStateActions.addCost(input))
    };
    const openNewCostModalHandler = () => dispatch(mainStateActions.setShowNewCostModal(true));
    const closeNewCostModalHandler = () => dispatch(mainStateActions.setShowNewCostModal(false));

    return (
        <React.Fragment>
            <div className={styles['page-wrapper']}>
                <Messages 
                    show={showSuccessMessage}
                    variant='success' 
                    message={addCostSuccessMessage} 
                    className={styles['success-toast']}
                />
                <AppHeader openNewCostModalHandler={openNewCostModalHandler} showNewButton/>
                <Modal show={showNewCostModal} onBackdropClick={closeNewCostModalHandler}>
                    <NewCostForm onAddCost={addCostHandler} onCancel={closeNewCostModalHandler}/>
                </Modal>
                <div className={styles['expenses-list__container']}>
                    <ExpensesList data={costData}/>
                </div>
            </div>
        </React.Fragment> 
    )
}

export default App;
