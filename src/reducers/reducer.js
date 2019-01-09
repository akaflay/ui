import {ADD} from '../utils/Constants';
import {CURRENT_UPDATE} from '../utils/Constants';
import {LOAD, DELETE} from '../utils/Constants'
import {RESET} from '../utils/Constants';

const initialState = {
    lists: [],
    currentTodo: {firstName: '', lastName: ''}
};

const removeItemFromIndex = (state, index) => {
    state.lists.splice(index, 1)
    return state.lists;

}

export default (state = initialState, action) => {
    switch (action.type) {
        case RESET:
            return (initialState);
        case ADD:
            return ({...state, lists: state.lists.concat(action.payload), currentTodo: initialState.currentTodo});
        case LOAD:
            return ({...state, lists: action.payload});
        case CURRENT_UPDATE:
            return ({...state, currentTodo: action.payload});
        case DELETE:
            return ({...state, lists: removeItemFromIndex(state, action.payload - 1)});
        default:
            return state;

    }
}