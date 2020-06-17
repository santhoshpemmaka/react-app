import {createStore, combineReducers} from 'redux';

// ADD_expense





const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter : filterReducer
    })
);

const expenseOne = store.dispatch(addExpense({ description: 'rent',amount : 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffe',amount : 10 }));
store.dispatch(removeExpense({id : expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(123))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1234))




store.subscribe(()=>{
    const state = store.getStore()
    const visibleExpenses = getVisibilityExpenses(state.expense,state.filter)
    console.log(visibleExpenses)
})

