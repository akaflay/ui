import {ADD} from '../utils/Constants';
import {CURRENT_UPDATE} from '../utils/Constants';
import {LOAD, DELETE} from '../utils/Constants'
import {RESET} from '../utils/Constants';

const initialState = {
    lists: [],
    current: {firstName: '', lastName: ''}
};

const removeItemFromIndex = (state, id) => {
var index;
var count=0;
    state.lists.forEach((item)=>{
    if(item.studentId===id) index=count;
    count++;
    })
     state.lists.splice(index,1);
     return state.lists;

}

export default (state = initialState, action) => {
    switch (action.type) {
        case RESET:
            return (initialState);
        case ADD:
            return ({...state, lists:state.lists.concat(action.payload),current: initialState.current});
        case LOAD:
            return ({...state, lists: action.payload});
        case CURRENT_UPDATE:
            return ({...state, current: action.payload});
        case DELETE:
            return ({...state, lists: removeItemFromIndex(state, action.payload )});
        default:
            return state;

    }
}