import React, {useState} from 'react';
import Card from '../card/Card'
import './NewCostForm.css';

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
            amount,
            date
        }

        props.onAddCost(costData);
        clearForm();
    }
    const cancelHandler = (e) => {
        e.preventDefault();
        clearForm();
    }

    return (
        <Card className='form-wrapper'>
            <h2 className='card-header'>New Cost</h2>
            <form>
                <div className='form-element'>
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
                <div className='form-element'>
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
                <div className='form-element'>
                    <label>Cost Date</label>
                    <input 
                        type='date' 
                        className='datepicker-input' 
                        value={date} 
                        onChange={dateChangeHandler}
                        data-id="validation"
                    />
                </div>
                <div className='buttons-block'>
                    <button className='submit-button' onClick={submitHandler}>Confirm</button>
                    <button className='cancel-button' onClick={cancelHandler}>Cancel</button>
                </div>
            </form>
        </Card>
    )
}

export default NewCostForm;