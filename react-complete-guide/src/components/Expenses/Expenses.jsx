import React, { useState } from 'react'

import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import ExpensesChart from './ExpensesChart'

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenseHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    defaultSelected={filteredYear}
                    onFilterExpense={filterExpenseHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;