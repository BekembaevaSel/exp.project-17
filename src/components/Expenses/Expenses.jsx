import React from 'react'

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	const filteredExpenses = props.data.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>

				<ExpensesChart expenses={filteredExpenses} />

				<ExpensesList
					expenses={filteredExpenses}
					selected={filteredYear}
					datas={props.data}
				/>
			</Card>
		</>
	)
}

export default Expenses
