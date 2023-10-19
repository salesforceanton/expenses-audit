import React, {useState} from 'react';
import Card from '../card/Card'
import './NewCostForm.css';

const NewCostForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const titleChangeHandler = (e) => setTitle(e.target.value);
    const amountChangeHandler = (e) => setAmount(e.target.value);
    const dateChangeHandler = (e) => setDate(e.target.value);

    return (
        <Card className='form-wrapper'>
            <h2 className='card-header'>New Cost</h2>
            <form>
                <div className='form-element'>
                    <label>Title</label>
                    <input placeholder='Describe your expense...' type='text' value={title} onChange={titleChangeHandler}/>
                </div>
                <div className='form-element'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler}/>
                </div>
                <div className='form-element'>
                    <label>Cost Date</label>
                    <input type='date' className='datepicker-input' value={date} onChange={dateChangeHandler}/>
                </div>
                <div className='buttons-block'>
                    <button className='submit-button' type='submit'>Confirm</button>
                    <button className='cancel-button'>Cancel</button>
                </div>
            </form>
        </Card>
    )
}

export default NewCostForm;