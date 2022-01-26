import React from 'react'

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
	// -------------------------------------------------------------------
	//  СПОСОБ С МАР

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

// ---------------------------------------------------------

// ПЕРВЫЙ СПОСОБ
/* 
	return (
		<div className='expenses'>
			<ExpenseItem
				title={props.data[0].title}
				amount={props.data[0].amount}
				date={props.data[0].date}
			/>
			<ExpenseItem
				title={props.data[1].title}
				amount={props.data[1].amount}
				date={props.data[1].date}
			/>
			<ExpenseItem
				title={props.data[2].title}
				amount={props.data[2].amount}
				date={props.data[2].date}
			/>
		</div>
	)
} */

export default Expenses
