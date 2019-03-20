//Types
import { types } from "./types";

export const todosActions = {
    //Sync
    fillTodos: (todos) => {
        return {
            type:    types.FILL_TODOS,
            payload: todos,
        };
    },
    createTodo: (todo) => {
        return {
            type:    types.CREATE_TODO,
            payload: todo,
        };
    },
    removeTodo: (todoId) => {
        return {
            type:    types.REMOVE_TODO,
            payload: todoId,
        };
    },
    updateTodo: (newTodoData) => {
        return {
            type:    types.UPDATE_TODO,
            payload: newTodoData,
        };
    },
    togglePriorityTodo: (newTodoData) => {
        return {
            type:    types.TOGGLE_PRIORITY_TODO,
            payload: newTodoData,
        };
    },
    toggleCompletedTodo: (newTodoData) => {
        return {
            type:    types.TOGGLE_COMPLETED_TODO,
            payload: newTodoData,
        };
    },
    allCompletedTodos: (todos) => {
        return {
            type:    types.ALL_COMPLETED_TODOS,
            payload: todos,
        };
    },
    //Async
    createTodoAsync: (todoMessage) => {
        return {
            type:    types.CREATE_TODO_ASYNC,
            payload: todoMessage,
        };
    },
    fetchTodosAsync: () => {
        return {
            type: types.FETCH_TODOS_ASYNC,
        };
    },
    removeTodoAsync: (todoId) => {
        return {
            type:    types.REMOVE_TODO_ASYNC,
            payload: todoId,
        };
    },
    togglePriorityTodoAsync: (newTodoData) => {
        return {
            type:    types.TOGGLE_PRIORITY_TODO_ASYNC,
            payload: newTodoData,
        };
    },
    toggleCompletedTodoAsync: (newTodoData) => {
        return {
            type:    types.TOGGLE_COMPLETED_TODO_ASYNC,
            payload: newTodoData,
        };
    },
    updateTodoAsync: (newTodoData) => {
        return {
            type:    types.UPDATE_TODO_ASYNC,
            payload: newTodoData,
        };
    },
    allCompletedTodosAsync: (todos) => {
        return {
            type:    types.ALL_COMPLETED_TODOS_ASYNC,
            payload: todos,
        };
    },
};
