import React from 'react';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';


class ExpensesForm extends React.Component{
    state = {
        description : '',
        expense_note : '',
        amount : 'number',
        error : ''
    }
    onChangeInput = (e) => {
        let describe = e.target.value;
        this.setState( () => ({
            description : describe
        })
        );
    }

    onChangeTextarea = (e) => {
        let note_expense = e.target.value;
        this.setState( () => ({
            expense_note : note_expense
        }))
    }

    onChangeamount = (e) => {
        let amount = Number(e.target.value)
            this.setState( () => ({
                amount : amount
            }))
        
    }

    submitForm = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ error : "Please provider response for the description and amount"}))
        }
        else{
            this.setState( () => ({ error : ''}))
            this.props.onSubmit({
                descrition : this.state.description,
                amount : this.state.amount,
                note : this.state.expense_note
            })
        }
        
    }

    render(){
        return(
            <form onSubmit = {this.submitForm}>
                <input 
                    type = 'text'
                    placeholder ="description"
                    autoFocus
                    value= {this.state.description}
                    onChange = {this.onChangeInput}
                />
                <input 
                    type = 'text'
                    placeholder = "amount"
                    value = {this.state.amount}
                    onChange = {this.onChangeamount}
                />
                <textarea
                 placeholder ="add a note for your expenses (optional)"
                 onChange = {this.onChangeTextarea}
                 value = {this.state.note_expense}
                >
                </textarea>
                <button>Add Expense</button>
            
            </form>
        );
    }
}



export default connect()(ExpensesForm);