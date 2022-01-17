
import './App.css';
import Expenses from './components/Expenses/Expenses'

function helloHandler(){
	for(let i = 0; i <=3; i++){
		alert('hello')
	}
}

function App() {
  const expenses = [
		{
			id: 'el1',
			title: 'paper',
			amount: 1.5,
			date: new Date(2021, 4, 3),
		},
		{
			id: 'el2',
			title: 'car insurance',
			amount: 1.5,
			date: new Date(2021, 3, 22),
		},
		{
			id: 'el3',
			title: 'painting',
			amount: 10,
			date: new Date(2021, 4, 12),
		},
		{
			id: 'el4',
			title: 'refil',
			amount: 5,
			date: new Date(2021, 6, 12),
		},
	]
  return (
    <div className="App">
      <Expenses data={expenses}/>
	  <button onClick={helloHandler}>click</button>
    </div>
  );
}

export default App;
