import React from 'react';
import { connect } from 'react-redux';
import  ExpenseListItem from './expensesItem';

const Expenselist = (props) => {
    return(
        <div>
            <h1> Expenselist </h1>
            {props.expense.map((expense)=>{
                return <ExpenseListItem {...expense} />
            })}
            {props.filters}
        </div>
    );
    
}
const mapStateToProps = (state) =>{
    return{
        expense : state.expense,
        filters : state.filters
    }
};
export default connect(mapStateToProps)(Expenselist);