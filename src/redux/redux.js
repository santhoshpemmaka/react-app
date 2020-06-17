import {createStore} from 'redux';




const countReducer = (state = {counter:0}, action) => {
    switch(action.tye){
        case 'INCREMENT':
            return{
                counter : state.counter + action.count
            }
        case 'DECREMENT' :
            
            return{
                counter : state.counter - action.count
            }
        case 'RESET' :
            return{
                counter: 0
            }
        case 'SET' :
            return{
                counter : store.count
            }
        default :{
            return state;
        }
    }
}
const store = createStore(countReducer);


store.subscribe( () => {
    console.log(store.getState()); 
})

// const unsubscribe = store.subscribe( () => {
//     console.log(store.getState());
// }) 
// unsubscribe();

const incerment = ({count =1}= {}) => {
    return{
        type: 'INCREMENT',
        count
    }
}

const decrement = ({count =1}= {}) => {
    return{
        type : 'DECREMENT',
        count
    } 
    
}
const reset = () => {
    return{
        type : 'RESET'
    }
}

const set = () => {
    return{
        type: 'SET',
        count :101
    }
}

store.dispatch(
    incerment({count :5}),
    decrement({count:10}),
    reset()

)

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type : 'DECREMENT'
})

store.dispatch({
    type: 'RESET'
})

 


export default store;