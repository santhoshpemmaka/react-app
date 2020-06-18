import React from 'react';
import ExpensesForm from './addExpensesForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensesPage = () => {
    return(
        <div>
            <h1>Add Expenses</h1>
            <ExpensesForm 
                onSubmit = {(expense) => {
                    props.dispatch(addExpense(expense));
                    props.history.push('/')
                }}
            
            />
        
        </div>
    )
}

export default connect()(AddExpensesPage);