import React, {useState} from 'react';
import Card from '../common/card/Card'
import styles from './NewCostForm.module.css';

const NewCostForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const titleChangeHandler = (e) => setTitle(e.target.value);
    const amountChangeHandler = (e) => setAmount(e.target.value);
    const dateChangeHandler = (e) => setDate(e.target.value);

    const reportFormValidity = () => Array.from(document.querySelectorAll('[data-id="validation"]'))
        .map((i) => i.reportValidity())
        .every((i) => !!i);
    
    const clearForm = () => {
        setTitle('');
        setAmount(0);
        setDate(new Date().toISOString().slice(0, 10));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!reportFormValidity()) return;

        const costData = {
            title,
            amount: +amount,
            date
        }

        props.onAddCost(costData);
        clearForm();
        props.onCancel();
    }
    const cancelHandler = (e) => {
        e.preventDefault();
        clearForm();
        props.onCancel();
    }

    return (
        <Card className={styles['form-wrapper']}>
            <h2 className={styles['form-header']}>New Cost</h2>
            <form>
                <div>
                    <label>Title</label>
                    <input 
                        placeholder='Describe your expense...' 
                        type='text' 
                        value={title} 
                        onChange={titleChangeHandler}
                        data-id="validation"
                        required
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0.01' 
                        step='0.01' 
                        value={amount} 
                        onChange={amountChangeHandler}
                        data-id="validation"
                    />
                </div>
                <div>
                    <label>Cost Date</label>
                    <input 
                        type='date' 
                        className='datepicker-input' 
                        value={date} 
                        onChange={dateChangeHandler}
                        data-id="validation"
                    />
                </div>
                <div className={styles['buttons-block']}>
                    <button className={styles['submit-button']} onClick={submitHandler}>Confirm</button>
                    <button className={styles['cancel-button']} onClick={cancelHandler}>Cancel</button>
                </div>
            </form>
        </Card>
    )
}

export default NewCostForm;