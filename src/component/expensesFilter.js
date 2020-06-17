import React from 'react';
import ExpenseListItem from './expensesItem';
import {connect} from 'react-redux';
import { setTextFilter } from '../actions/filter';

const ExpenseFilters = () => {
    return(
        <div>
            <input type='text' value = {props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }} />
        
        </div>
    );
}

const mapStateToprops = (state) => {
    return{
        filters : state.filters
    }
}

export default connect(mapStateToprops)(ExpenseFilters);