//Types
import { types } from "./types";

export const editActions = {
    //Sync
    startEditTodo: (todo) => {
        return {
            type:    types.START_EDIT_TODO,
            payload: todo,
        };
    },
    cancelEditTodo: () => {
        return {
            type: types.CANCEL_EDIT_TODO,
        };
    },
};
