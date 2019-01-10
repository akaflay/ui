import {CURRENT_UPDATE, ADD, DELETE, LOAD, RESET} from "../utils/Constants";
import {create, remove, get} from "../services/service";

export const updateCurrent = (value) => ({type: CURRENT_UPDATE, payload: value});
export const load = (list) => ({type: LOAD, payload: list});
export const add = (list) => ({type: ADD, payload: list});
export const clear = () => ({type: RESET, payload: null});
export const removeItem = (id) => ({type: DELETE, payload: id});

export const fetch = () => {
    return (dispatch) => {
        get().then((list) =>dispatch(load(list)));
    }
};

export const save = (name, count) => {
    return (dispatch) => {
        create(name, count).then((response) => {
        name["studentId"]=response.response;
        return dispatch(add(name));
        });
    }
};

export const reset = () => {
    return (dispatch) => {
        remove().then(todos => dispatch(clear()));
    }
};
export const removeSingle = (id) => {
    return (dispatch) => {
        remove(id).then(dispatch(removeItem(id)));
    }
}