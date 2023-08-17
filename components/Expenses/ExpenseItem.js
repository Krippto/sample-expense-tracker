import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <ExpenseDetails amount={props.amount} title={props.title} />
            </Card>
        </li>

    );
}

export default ExpenseItem