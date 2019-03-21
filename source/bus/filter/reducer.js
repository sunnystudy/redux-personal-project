//Types
import { types } from "./types";

const initialState = "";

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_TODO:
            return action.payload;
        default:
            return state;
    }
};
