import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
	let ExpenseContent = (
		<h2 className='expenses-list__fallback'>No expenses found</h2>
	)

	if (props.expenses.length > 0) {
		ExpenseContent = props.expenses.map((el) => {
			return (
				<ExpenseItem
					title={el.title}
					amount={el.amount}
					date={el.date}
					key={el.id}
				/>
			)
		})
	}

	if (props.selected === 'all' && props.datas.length > 0) {
		ExpenseContent = props.datas.map((el) => {
			return (
				<ExpenseItem
					title={el.title}
					amount={el.amount}
					date={el.date}
					key={el.id}
				/>
			)
		})
	}

	return <ul className='expenses-list'>{ExpenseContent}</ul>
}
export default ExpensesList;
