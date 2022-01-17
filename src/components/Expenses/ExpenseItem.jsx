import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
	let [title, setTitle] = useState(props.title)
	// const [amount, setAmount] = useState('$200')
	const expenseTitle = props.title
	// const expenseAmount = props.amount

	const updateTitleHandler = () => {
		setTitle('updated')
		// expenseTitle = 'updated'
	}

	

	return (
		<div className='expense-item'>
			{console.log(title)}
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			<button onClick={updateTitleHandler}>update</button>
		</div>
	)
}
export default ExpenseItem;