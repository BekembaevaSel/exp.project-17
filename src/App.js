import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'

const initState = [
	{
		id: 'el1',
		title: 'paper',
		amount: 1.5,
		date: new Date(2022, 4, 3),
	},
	{
		id: 'el2',
		title: 'car insurance',
		amount: 1.5,
		date: new Date(2023, 3, 22),
	},
	{
		id: 'el3',
		title: 'painting',
		amount: 10,
		date: new Date(2023, 4, 12),
	},
	{
		id: 'el4',
		title: 'refil',
		amount: 5,
		date: new Date(2024, 6, 12),
	},
]

const App = () => {
	const [expenses, setExpenses] = useState(initState)

	const addExpenseDataHandler = (expense) => {
		setExpenses((prevState) => {
			return [expense, ...prevState]
		})
	}

	return (
		<div className='App'>
			<NewExpenses onAddExpense={addExpenseDataHandler} />
			<Expenses data={expenses} />
		</div>
	)
}

export default App
