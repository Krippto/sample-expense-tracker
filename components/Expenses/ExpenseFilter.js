// import { useState } from 'react';
import './ExpenseFilter.css'

const ExpensesFilter = (props) => {

  // const [year, setYear] = useState('')

  const valueHandler = (event) =>{
    
    if(event.target.value !== '@'){
      const year = event.target.value
      props.onChangeFilter(year)
    }
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={valueHandler} >
          <option value="@">Please choose an option</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter;