import React, {useState} from 'react';

import ExpensesList from "./components/expensesList/ExpensesList";
import NewCostForm from "./components/newCostForm/NewCostForm";
import Modal from './components/modal/Modal';
import AppHeader from './components/appHeader/AppHeader';

function App() {
    const initialCostData = [
        {
            date: new Date(2023, 2, 11),
            title: 'X-Box Series-S',
            amount: 425.50
        },
        {
            date: new Date(2023, 5, 15),
            title: 'Jagerrmasster',
            amount: 19.99
        },
        {
            date: new Date(2023, 6, 14),
            title: 'Cordiant Tunga Nordway x4',
            amount: 200
        },
        {
            date: new Date(2023, 10, 6),
            title: 'Car repair work',
            amount: 278.50
        },
        {
            date: new Date(2023, 10, 10),
            title: 'Xiomi vacuum mop ultra 10',
            amount: 300.60
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
