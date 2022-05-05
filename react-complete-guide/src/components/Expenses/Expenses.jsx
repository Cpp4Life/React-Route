import React from 'react'

import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

function Expenses (props) {
    return (
        <Card className='expenses'>
            {props.items.map(element =>
                <ExpenseItem
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />)}
        </Card>
    );
}

export default Expenses;