import React, {useState} from 'react';

import styles from './App.module.css';

import ExpensesList from "./components/expensesList/ExpensesList";
import NewCostForm from "./components/newCostForm/NewCostForm";
import Modal from './components/common/modal/Modal';
import AppHeader from './components/appHeader/AppHeader';
import Messages from './components/common/messages/Messages';

function App() {
    const addCostSuccessMessage = 'Cost has been added successfully';

    const [costData, setCostData] = useState([]);
    const [showNewCostModal, setShowNewCostModal] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const addCostHandler = (input) => {
        setCostData((prevState) => [input, ...prevState]);
        setShowSuccessMessage(true)
        window.setTimeout(() => {
            setShowSuccessMessage(false)
        }, 3000)
    };
    const openNewCostModalHandler = () => setShowNewCostModal(true);
    const closeNewCostModalHandler = () => setShowNewCostModal(false);

    return (
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
        
    )
}

export default App;
