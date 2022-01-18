import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props) {
	// -------------------------------------------------------------------
	//  СПОСОБ С МАР

	return (
		<>
			<Card className='expenses'>
				{props.data.map((el) => {
					return (
						<ExpenseItem
							title={el.title}
							amount={el.amount}
							date={el.date}
							key={Math.random()}
						/>
					)
				})}
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
