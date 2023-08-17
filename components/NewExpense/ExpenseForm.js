import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) =>{
    const [newTitle, setNewTitle] = useState('')
    const [newAmount, setNewAmount] = useState('')
    const [newDate, setNewDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleHandler = (event) =>{
        // setUserInput((prevState)=>{
        //     return {...prevState,
        //     enteredTitle:event.target.value}
        // })
        setNewTitle(event.target.value)
    }
    const amountHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        setNewAmount(event.target.value)
    }
    const dateHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        setNewDate(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        props.onSaveExpenseData(expenseData)
        setNewTitle('')
        setNewAmount('')
        setNewDate('')
        props.onClickedCancel()
    }

    const hideHandler = () =>{
        // console.log("Cancel")
        props.onClickedCancel()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" id="input" value={newTitle} onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={newAmount} onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-1-1" max="2022-12-31" value={newDate} onChange={dateHandler} />
                </div>
            </div>
            <div>
                <button onClick={hideHandler} >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm