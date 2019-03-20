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
    stopEditTodo: () => {
        return {
            type: types.STOP_EDIT_TODO,
        };
    },
};
