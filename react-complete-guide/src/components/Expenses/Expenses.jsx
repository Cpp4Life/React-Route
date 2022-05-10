import React, { useState } from 'react'

import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenseHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter defaultSelected={filteredYear} onFilterExpense={filterExpenseHandler} />
                {props.items.map(element =>
                    <ExpenseItem
                        title={element.title}
                        amount={element.amount}
                        date={element.date}
                    />)}
            </Card>
        </div>
    );
}

export default Expenses;