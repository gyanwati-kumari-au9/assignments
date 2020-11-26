var redux = require('redux');
var createStore = redux.createStore;

var initialData = {
    tasks: []
}

var reducer = function(state=initialData, action){
    console.log('reducer called with state',state);
    console.log('reducer called with action',action);
    switch(action.type){
        case 'ADD_TASK':
            return{
                ...state,
                tasks: [...state.tasks, action.payload.new]
            }
        case 'REMOVE_TASK':
            const newTasks = state.tasks && state.tasks.filter(t => t.id !==action.payload.new.id);
            return{
                ...state,
                tasks: [...newTasks]
            }
            default:
                return state;
    }
    
}

var store = createStore(reducer);
console.dir(store);

console.dir(store.getState());
store.dispatch({
    type: 'ADD_TASK',
    payload: {
        new: { id: '5', task:'test123'}
      }
});
console.dir(store.getState());

store.dispatch({
    type: 'REMOVE_TASK',
    payload: {
        new: { id: '5', task:'test123'}
      }
});


console.dir(store.getState());