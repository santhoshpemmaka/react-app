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

export default getVisibilityExpenses;