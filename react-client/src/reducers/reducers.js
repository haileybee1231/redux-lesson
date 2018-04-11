import { DefaultState } from '../store/DefaultState.js';

const reducers = (state = DefaultState, action) => {
    // we set the default state to our default state object, and switch on action type
    switch(action.type) {
        case 'ADD-TODO':
        // immutability! Never modify state directly, always make a copy and change the copy
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'REMOVE-TODO':
        // since we can't just change our todos array, we have to copy and then modify it
            let index = state.todos.indexOf(action.payload);
            // first, we'll find the index of the desired todo 
            let updatedTodos = state.todos.slice();
            // make a copy
            updatedTodos.splice(index, 1);
            // and finally, splice the todo from the copy
            return {
                ...state,
                todos: updatedTodos
            }
        default: return state; // always be sure to return state as the default case
    }
}

export default reducers;