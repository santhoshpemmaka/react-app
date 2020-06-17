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

export default expensesReducer;