  
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

export default filterReducer;