import React, { useState, useEffect } from 'react';
import { useHttp, HTTP_METHOD } from './hooks/use-http';

import styles from './App.module.css';

import ExpensesList from "./components/expensesList/ExpensesList";
import NewCostForm from "./components/newCostForm/NewCostForm";
import Modal from './components/common/modal/Modal';
import AppHeader from './components/appHeader/AppHeader';
import Messages from './components/common/messages/Messages';
import LoadingSpinner from './components/common/spinner/Spinner';

const addCostSuccessMessage = 'Cost has been added successfully';
const costsEndpoint = 'https://react-test-http-bae73-default-rtdb.firebaseio.com/costs.json';

function App() {
    const [costData, setCostData] = useState([]);
    const [showNewCostModal, setShowNewCostModal] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const { isLoading, error, httpRequest } = useHttp();

    useEffect(() => {
        const handleGetCostsData = (response) => {
            const data = Object.keys(response).map((id) => ({...response[id], id }))
            setCostData(data);
        };

        httpRequest({ endpoint: costsEndpoint }, handleGetCostsData);
    }, [httpRequest]);

    const handleCreateCostSuccess = (input) => (response) => {
        setCostData((prevState) => [{ ...input, id: response.name}, ...prevState]);
        setShowSuccessMessage(true)
        window.setTimeout(() => {
            setShowSuccessMessage(false)
        }, 3000)
    };

    const createNewCost = (costItem) => {
        httpRequest({endpoint: costsEndpoint, method: HTTP_METHOD.POST, body: costItem }, handleCreateCostSuccess(costItem))
    };

    const addCostHandler = (input) => {
        createNewCost(input);
    };
    const openNewCostModalHandler = () => setShowNewCostModal(true);
    const closeNewCostModalHandler = () => setShowNewCostModal(false);

    return (
        <React.Fragment>
            <LoadingSpinner show={isLoading} />
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
