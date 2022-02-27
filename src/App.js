import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'

const App = () => {
	const [expenses, setExpenses] = useState([])

	const addExpenseDataHandler = (expense) => {
		setExpenses(expense)
	}

	return (
		<div className='App'>
			<NewExpenses onAddExpense={addExpenseDataHandler} />
			<Expenses data={expenses} />
		</div>
	)
}

export default App
