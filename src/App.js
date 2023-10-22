import React, {useState} from 'react';

import ExpensesList from "./components/expensesList/ExpensesList";
import NewCostForm from "./components/newCostForm/NewCostForm";
import Modal from './components/modal/Modal';
import AppHeader from './components/appHeader/AppHeader';

function App() {
    const initialCostData = [
        {
            date: new Date(),
            title: 'X-Box Series-S',
            amount: 425.50
        },
        {
            date: new Date(),
            title: 'Jagerrmasster',
            amount: 19.99
        },
        {
            date: new Date(),
            title: 'Car repair work',
            amount: 278.50
        }
    ];

    const [costData, setCostData] = useState(initialCostData);
    const [showNewCostModal, setShowNewCostModal] = useState(false);

    const addCostHandler = (input) => setCostData((prevState) => [input, ...prevState]);
    const openNewCostModalHandler = () => setShowNewCostModal(true);
    const closeNewCostModalHandler = () => setShowNewCostModal(false);

    return (
        <div>
           <AppHeader openNewCostModalHandler={openNewCostModalHandler}/>
            <Modal show={showNewCostModal} onBackdropClick={closeNewCostModalHandler}>
                <NewCostForm onAddCost={addCostHandler} onCancel={closeNewCostModalHandler}/>
            </Modal>
            <ExpensesList data={costData}/>
        </div>
        
    )
    
}

export default App;
