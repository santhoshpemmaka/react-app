export const setTextFilter = (text = '') => {
    return{
        type : 'SET_EXPENSES',
        text

    }
}

export const sortByDate = () => {
    return{
        type : 'SORTBY_DATE',

    }
}
export const sortByAmount = () => {
    return{
        type : 'SORTBY_AMOUNT',
        
    }
}

export const setStartDate = (date = '') => {
    return {
        type : 'SETSTART_DATE',
        date
    }
}

export const setEndDate = (date) => {
    return {
        type : 'SETENDDATE',
        date
    }
}