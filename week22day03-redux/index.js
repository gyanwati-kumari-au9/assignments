// Q. Create a node project, and do the setup of redux and make reducer such that you can
// add/push tasks in the task array of the initial data or remove certain task from an array.
// Below is the initial data object
// var initialData = {
// tasks: []
// }
// Types:
// 1. ADD_TASK
// 2. REMOVE_TASK


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


