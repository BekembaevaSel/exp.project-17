import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = () => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const titleChangeHandler = (event) => {
		setTitle(event.target.value)
	}
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        console.log(title);
        console.log(amount);
        console.log(date);
    }

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.1' step='1' onChange={amountChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2022-01-01' onChange={dateChangeHandler} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
