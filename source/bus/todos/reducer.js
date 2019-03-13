//Core
import { fromJS, List } from 'immutable';

//Types
import { types } from "./types";

// Instruments
import { sorter } from '../../instruments/helpers';

const initialState = List();

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_TODOS:
            return fromJS(action.payload).sort(sorter);
        case types.CREATE_TODO:
            return state.push(fromJS(action.payload)).sort(sorter);
        case types.REMOVE_TODO:
            return state.filterNot((item) => item.get("id") === action.payload);
        case types.TOGGLE_PRIORITY_TODO:
            return state.map((item) => item.get("id") === action.payload.id ? item.update("favorite", value => !item.get("favorite")) : item).sort(sorter);
        case types.TOGGLE_COMPLETED_TODO:
            return state.map((item) => item.get("id") === action.payload.id ? item.update("completed", value => !item.get("completed")) : item).sort(sorter);
        case types.ALL_COMPLETED_TODOS:
            return state.map((item) => item.update("completed", value => true)).sort(sorter);
        default:
            return state;
    }
};
