import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';


const storeContainer = () => {
    
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filter : filterReducer
        })
    );
    return store;
    
}

export default storeContainer;

