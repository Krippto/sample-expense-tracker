import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { useState } from "react"
const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    const toggleDisplayHandler = () => {
        setShow(<button onClick={showChangeHandler}>Add New Expense</button>)
    }

    const showChangeHandler = () =>{
        setShow(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickedCancel={toggleDisplayHandler}/>)
    }

    const [show, setShow] = useState(<button onClick={showChangeHandler}>Add New Expense</button>)

    return(
        <div className="new-expense">
            {show}
            {/*  */}
        </div>
    )
}

export default NewExpense