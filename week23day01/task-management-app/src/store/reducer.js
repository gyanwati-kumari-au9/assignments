// Create your own task management application with react and also use redux for doing so.
// Need to do following things:
// 1. Add task
// 2. Edit task
// 3. Delete task

const initalTodo =  ['Revise for the test'];

const Reducer = (state, action) => {
    state = state || initalTodo

    switch (action.type) {
        case 'ADD_TASK':
            return [ ...state, action.payload ];
           
        case 'REMOVE_TASK':
            const todos = state.filter(function(item) {
                return item !== action.payload;
            });
            return [...todos];
        
        case 'EDIT_POST': {
            console.log('Editing Task', action)
            const todos = state.filter(function(item) {
                return item !== action.payload.oldVal;
            });
            // var objIndex = state.tasks.findIndex((obj => obj === action.payload.task.id));

            // //Log object to Console.
            // console.log("Before update: ", state.tasks[objIndex])
        
            // //Update object's name property.
            // state.tasks[objIndex].name = action.payload.task.name
            return [...todos, action.payload.newVal]
        }
            
        default:
            return state;
    }
};

export default Reducer;