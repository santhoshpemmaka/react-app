export const addExpense = ({ description = "", note = '', amount =0, createAt =0 }= {}) => {
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

export const removeExpense = ({id}) => {
    return{
        type : 'REMOVE_EXPENSE',
        id
    }
}

export const editExpense = ({id,update}) => {
    return{
        type : 'EDIT_EXPENSES',
        id,
        update

    }
}
