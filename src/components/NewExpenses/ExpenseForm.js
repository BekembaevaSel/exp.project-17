import './ExpenseForm.css'
import { useState, useCallback, useEffect } from 'react'
import Loader from '../UI/Loader'
import Alerts from '../UI/Alerts'

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	const [showForm, setShowForm] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

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

	const fetchExpensesHandler = useCallback(async () => {
		setIsLoading(true)
		setError(null)
		try {
			const response = await fetch(
				'https://expenses-project-fd112-default-rtdb.firebaseio.com/expenses.json',
			)
			if (!response.ok) {
				throw new Error('something went wrong')
			}
			const data = await response.json()
			const loadedExpenses = []
			for (const key in data) {
				loadedExpenses.push({
					id: key,
					title: data[key].title,
					amount: data[key].amount,
					date: new Date(data[key].date),
				})
			}
			props.onSaveExpenseData(loadedExpenses)
		} catch (error) {
			setError(error.massage)
		}
		setIsLoading(false)
	}, [])

	useEffect(() => {
		fetchExpensesHandler()
	}, [fetchExpensesHandler])

	let loadingContent = <p></p>

	if (error) {
		loadingContent = <p>{error}</p>
	}
	if (isLoading) {
		loadingContent = <Loader />
	}

	async function addExpenseBaseHandler(expense) {
		const request = await fetch(
			'https://expenses-project-fd112-default-rtdb.firebaseio.com/expenses.json',
			{
				method: 'POST',
				body: JSON.stringify(expense),
				headers: {
					'Content-type': 'application/json',
				},
			},
		)
		if (request.ok) {
			setIsLoaded(true)
			setTimeout(() => {
				setIsLoaded(false)
			}, 1500)
		}
		setTitle('')
		setAmount('')
		setDate('')
		fetchExpensesHandler()
		setIsLoading(true)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		if (title && amount && date) {
			const currentData = {
				title: title,
				amount: amount,
				date: date,
			}
			addExpenseBaseHandler(currentData)
		} else alert('type something...')
	}

	const showFormHandler = () => {
		setShowForm(true)
	}

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
					<button type='submit' onClick={fetchExpensesHandler}>
						Add new expense
					</button>
					<button onClick={closeFormHandler}>Cancel</button>
				</div>
				<div>{loadingContent}</div>
			</form>
		)
	} else {
		expenseContext = <button onClick={showFormHandler}>Add expense</button>
		
	}
	return <>{expenseContext} {isLoaded && <Alerts />}</>
}

export default ExpenseForm
