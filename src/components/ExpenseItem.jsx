import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title)
	// const [amount, setAmount] = useState('$200')
	// const expenseTitle = props.title
	const expenseAmount = props.amount

	const updateTitleHandler = () => {
		setTitle('updated')
		// expenseTitle = 'updated'
	}

	return (
		<div className='expense-item'>
			{console.log(title)}
			<ExpenseDate date={props.date} />
			<h2 className='expense-item__description'>{title}</h2>
			<div className='expense-item__price'>${expenseAmount}</div>
			<button onClick={updateTitleHandler}>update</button>
		</div>
	)
}
export default ExpenseItem;