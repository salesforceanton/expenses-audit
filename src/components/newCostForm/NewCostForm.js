import React, { useState, useRef } from 'react';

import Card from '../common/card/Card'
import styles from './NewCostForm.module.css';
import FormInput from '../common/formInput/FormInput';

const NewCostForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const titleFieldRef = useRef();
    const amountFieldRef = useRef();
    const dateFieldRef = useRef();

    const isFormInvalid = () => [titleFieldRef, amountFieldRef, dateFieldRef]
        .map((e) => e.current.reportValidity())
        .some((e) => !!e);

    const titleChangeHandler = (e) => setTitle(e.target.value);
    const amountChangeHandler = (e) => setAmount(e.target.value);
    const dateChangeHandler = (e) => setDate(e.target.value);
    
    const clearForm = () => {
        setTitle('');
        setAmount(0);
        setDate(new Date().toISOString().slice(0, 10));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (isFormInvalid()) {
            return;
        }

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
                <FormInput
                    label='Title'
                    placeholder='Describe your expense...' 
                    type='text' 
                    value={title} 
                    onChange={titleChangeHandler}
                    ref={titleFieldRef}
                    required
                />
                <FormInput
                    label='Amount'
                    type='number'
                    min='0.01' 
                    step='0.01' 
                    value={amount} 
                    onChange={amountChangeHandler}
                    ref={amountFieldRef}
                    required
                />
                <FormInput
                    label='Cost Date'
                    type='date' 
                    className='datepicker-input' 
                    value={date} 
                    onChange={dateChangeHandler}
                    ref={dateFieldRef}
                />
                <div className={styles['buttons-block']}>
                    <button className={styles['submit-button']} onClick={submitHandler}>Confirm</button>
                    <button className={styles['cancel-button']} onClick={cancelHandler}>Cancel</button>
                </div>
            </form>
        </Card>
    )
}

export default NewCostForm;