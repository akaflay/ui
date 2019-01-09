import reducer from './reducer'
import {ADD, DELETE, RESET} from '../utils/Constants'

describe("Reducer", () => {

    test('return state object', () => {
        const result = reducer(undefined, {type: 'undefinded'});
        expect(result).toBeDefined();
    });

    test('Add Item', () => {
        const startState = {
            lists: [
                {id: "1", "name": "Create Static UI ", isComplete: true},
                {id: "2", "name": "Initial State ", isComplete: true},
                {id: "3", "name": "Use State to render UI", isComplete: false}
            ],
            currentTodo: {firstName: '', lastName: ''}
        };
        const expectedState = {
            lists: [
                {id: "1", "name": "Create Static UI ", isComplete: true},
                {id: "2", "name": "Initial State ", isComplete: true},
                {id: "3", "name": "Use State to render UI", isComplete: false},
                {id: "4", "name": "Test State", isComplete: false}
            ],
            currentTodo: {firstName: '', lastName: ''}
        };
        const action = {type: ADD, payload: {id: "4", "name": "Test State", isComplete: false}};
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);

    });
    test('Delete Item', () => {
        const startState = {
            lists: [
                {id: "1", "name": "Create Static UI ", isComplete: true},
                {id: "2", "name": "Initial State ", isComplete: true},
                {id: "3", "name": "Use State to render UI", isComplete: false}
            ],
            currentTodo: {firstName: '', lastName: ''}
        };
        const expectedState = {
            lists: [
                {id: "1", "name": "Create Static UI ", isComplete: true},
                {id: "2", "name": "Initial State ", isComplete: true}
            ],
            currentTodo: {firstName: '', lastName: ''}
        };
        const action = {type: DELETE, payload: 3};
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);

    });

    test('Clear all Item', () => {
        const startState = {
            lists: [
                {id: "1", "name": "Create Static UI ", isComplete: true},
                {id: "2", "name": "Initial State ", isComplete: true},
                {id: "3", "name": "Use State to render UI", isComplete: false}
            ],
            currentTodo: {firstName: '', lastName: ''}
        };
        const expectedState = {
            lists: [],
            currentTodo: {firstName: '', lastName: ''}
        };
        const action = {type: RESET, payload: ''};
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);

    })

});