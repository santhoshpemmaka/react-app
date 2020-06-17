import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filter';
import { getvisibiltyExpenses} from './selectors/getvisibiltyExpenses';

const store = configureStore();

store.dispatch(addExpense({description : 'water',amount :1000}))
store.dispatch(setTextFilter('rent'))

const state = store.getStore();

const visibleExpenses = getvisibiltyExpenses(state.expenses, state.filters);

console.log(visibleExpenses)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
