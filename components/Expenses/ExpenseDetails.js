import { useState } from 'react'
import './ExpenseItem.css'

const ExpenseDetails = (props) => {
    // const [amount, setAmount] = useState(props.amount)
    // const clickHandler = () =>{
    //     setAmount(100)
    // }

    return(
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            {/* <button className='expense-item__price' onClick={clickHandler}>Change Expense</button> */}
        </div>
    )
}

export default ExpenseDetails