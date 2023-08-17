import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import { useState } from 'react'
import "./Expenses.css"
import ExpenseList from "./ExpenseList"
import ExpenseChart from './ExpenseChart'


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    // console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })


    return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses} />
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].location}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location={props.items[3].location}
      ></ExpenseItem>  */}
    </Card>
  )
}

export default Expenses 