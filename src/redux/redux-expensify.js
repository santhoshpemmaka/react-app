import {createStore, combineReducers} from 'redux';

// ADD_expense

const addExpense = ({ description = "", note = '', amount =0, createAt =0 }= {}) => {
    return{
        type : 'ADD_EXPENSES',
        expense: {
            id: 321,
            description,
            note,
            amount,
            createAt
        }
    }
}

const removeExpense = ({id}) => {
    return{
        type : 'REMOVE_EXPENSE',
        id
    }
}

const editExpense = ({id,update}) => {
    return{
        type : 'EDIT_EXPENSES',
        id,
        update

    }
}

const setTextFilter = (text = '') => {
    return{
        type : 'SET_EXPENSES',
        text

    }
}

const sortByDate = () => {
    return{
        type : 'SORTBY_DATE',

    }
}
const sortByAmount = () => {
    return{
        type : 'SORTBY_AMOUNT',
        
    }
}

const setStartDate = (date = '') => {
    return {
        type : 'SETSTART_DATE',
        date
    }
}

const setEndDate = (date) => {
    return {
        type : 'SETENDDATE',
        date
    }
}

const expensesDefaultReducer = [];
const expensesReducer = (state=expensesDefaultReducer, action) => {
    switch(action.type){
        case 'ADD_EXPENSES':
            return [...state, action.expense];
        
        case 'REMOVE_EXPENSES' :
            return state && state.filter((id) => {
                return id != action.id;
            })
        
        case 'EDIT_EXPENSES' :
            return state && state.map((item) => {
                if(item.id == action.id){
                    return {...item,...action.update}
                }
                else{
                    return item;
                }
            })
        default:
            return state;
    }
}   
const filterDefaultReducer = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const filterReducer = (state = filterDefaultReducer, action)  => {
    switch(action.type){
        case 'SET_EXPENSES':
            return {...state,text : action.text}
        
        case 'SORTBY_AMOUNT' :
            return {...state, sortBy : 'amount'}

        case 'SORTBY_DATE':
            return {...state, sortBy : 'date'}

        case 'SETSTART_DATE':
            return {...state, startDate : action.date}

        case 'SETEND_DATE':
            return {...state, endDate : action.date}
        
        default:
            return state;
    }
}

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

const getVisibilityExpenses = (expenses,{ text, startDate, sortBy, endDate}) =>{
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate != 'number' || expenses.createAt >= startDate;
        const startEndMatch = typeof endDate != 'number' || expenses.createAt <= endDate;
        const textMatch = expenses.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && startEndMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 :-1;
        }

    })
    
};


store.subscribe(()=>{
    const state = store.getStore()
    const visibleExpenses = getVisibilityExpenses(state.expense,state.filter)
    console.log(visibleExpenses)
})

