import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props) => {
	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={props.onAddExpense} />
		</div>
	)
}

export default NewExpenses
