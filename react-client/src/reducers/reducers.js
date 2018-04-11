import { DefaultState } from '../store/DefaultState.js';

const reducers = (state = DefaultState, action) => {
    switch(action.type) {
        case 'ADD-TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default: return state;
    }
}

export default reducers;