//Core
import { fromJS, Map } from "immutable";

//Types
import { types } from "./types";

const initialState = Map();

export const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_EDIT_TODO:
            return fromJS(action.payload);
        case types.STOP_EDIT_TODO:
            return state.clear();
        default:
            return state;
    }
};
