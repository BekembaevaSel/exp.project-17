import './ExpenseForm.css'
import { useState } from 'react'


const ExpenseForm = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	const [showForm, setShowForm] = useState(false)


	const inputChangeHandler = (event) => {
		const currentInput = event.target.name
		if (currentInput === 'title') {
			setTitle(event.target.value)
		} else if (currentInput === 'amount') {
			setAmount(event.target.value)
		} else if (currentInput === 'date') {
			setDate(event.target.value)
		}
	}

	const submitHandler = (event) => {
		event.preventDefault()
		const currentData = {
			title,
			amount: Number(amount),
			date: new Date(date),
		}
		props.onSaveExpenseData(currentData)
	}
		const showFormHandler=()=> {
		setShowForm(true)
	};

	const closeFormHandler = () => {
		setShowForm(false)
	}
	
	let expenseContext = null
	if (showForm === true) {
		expenseContext = (
			<form onSubmit={submitHandler}>
					<div className='new-expense__controls'>
						<div className='new-expense__control'>
							<label>Title</label>
							<input
								name='title'
								type='text'
								onChange={inputChangeHandler}
								value={title}
							/>
						</div>
						<div className='new-expense__control'>
							<label>Amount</label>
							<input
								name='amount'
								type='number'
								onChange={inputChangeHandler}
								value={amount}
							/>
						</div>
						<div className='new-expense__control'>
							<label>Date</label>
							<input
								name='date'
								type='date'
								min='2022-01-01'
								onChange={inputChangeHandler}
								value={date}
							/>
						</div>
					</div>
					<div className='new-expense__actions'>
						<button type='submit'>Add new expense</button>
						<button onClick={closeFormHandler}>Cancel</button>

			
					</div>
				</form>
		)
	}else {
		expenseContext = (
			<button onClick={showFormHandler}>Add expense</button>
		)
	}
	return (
		<>
	{expenseContext}
		</>	
		
	)
}

export default ExpenseForm

// ------------------------------------------------
// LAST VERSION

// const inputChangeHandler = (event) => {
// 	const currentInput = event.target.name
// 	setUserInput({
// 		...userInput,
// 		[currentInput] : event.target.value
// 	});
// }

// ------------------------------------------------
// VERSION WITH OBJECT

// const titleChangeHandler = (event) => {
// 	setUserInput({
// 		title: event.target.value
// 	});
// }
// const amountChangeHandler = (event) => {
// 	setUserInput({
// 		...userInput,
// 		amount: event.target.value
// 	})
// }
// const dateChangeHandler = (event) => {
// 	setUserInput({
// 		...userInput,
// 		date: event.target.value
// 	})
// }

// -----------prev state -----------------------------
// const titleChangeHandler = (event) => {
// 	setUserInput((prevState) => {
// 		return {
// 			...prevState,
// 			title: event.target.value,
// 		}
// 	})
// }

// const amountChangeHandler = (event) => {
// 	setUserInput((prevState) => {
// 		return {
// 			...prevState,
// 			amount: event.target.value,
// 		}
// 	})
// }

// const dateChangeHandler = (event) => {
// 	setUserInput((prevState) => {
// 		return {
// 			...prevState,
// 			date: event.target.value,
// 		}
// 	})
// }

// ----------------------------------------------------

// const titleChangeHandler = (event) => {
// 	setTitle(event.target.value)
// }
// const amountChangeHandler = (event) => {
//     setAmount(event.target.value)
// }
// const dateChangeHandler = (event) => {
//     setDate(event.target.value)
// }

// -------------------------------------------------------
