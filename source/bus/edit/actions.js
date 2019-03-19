//Types
import { types } from "./types";

export const filterActions = {
    //Sync
    searchTodo: (query) => {
        return {
            type:    types.SEARCH_TODO,
            payload: query,
        };
    },
};
