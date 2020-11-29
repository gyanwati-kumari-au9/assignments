const initialState = {
    tasks: []
}

const reducer = (state, action) => {
    state = state || initialState
    console.log('Inside reducer')
    switch (action.type) {
        
        case 'ADD_TASK':
            console.log('Adding Task',action)
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
};

export default reducer;