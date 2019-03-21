//Actions
import { todosActions } from "../actions";

//Types
import { types } from "../types";

describe('todos actions: ', () => {
    test('fillTodos', () => {
        expect(todosActions.fillTodos(__.todosList)).toEqual({
            type:    types.FILL_TODOS,
            payload: __.todosList,
        });
    });
    test('createTodo', () => {
        expect(todosActions.createTodo(__.todo)).toEqual({
            type:    types.CREATE_TODO,
            payload: __.todo,
        });
    });
    test('removeTodo', () => {
        expect(todosActions.removeTodo(__.todo.id)).toEqual({
            type:    types.REMOVE_TODO,
            payload: __.todo.id,
        });
    });
    test('updateTodo', () => {
        expect(todosActions.updateTodo(__.todo)).toEqual({
            type:    types.UPDATE_TODO,
            payload: __.todo,
        });
    });
    test('togglePriorityTodo', () => {
        expect(todosActions.togglePriorityTodo(__.todo)).toEqual({
            type:    types.TOGGLE_PRIORITY_TODO,
            payload: __.todo,
        });
    });
    test('toggleCompletedTodo', () => {
        expect(todosActions.toggleCompletedTodo(__.todo)).toEqual({
            type:    types.TOGGLE_COMPLETED_TODO,
            payload: __.todo,
        });
    });
    test('allCompletedTodos', () => {
        expect(todosActions.allCompletedTodos(__.todosList)).toEqual({
            type:    types.ALL_COMPLETED_TODOS,
            payload: __.todosList,
        });
    });
    ///
    test('fetchTodosAsync', () => {
        expect(todosActions.fetchTodosAsync()).toEqual({
            type: types.FETCH_TODOS_ASYNC,
        });
    });
    test('createTodoAsync', () => {
        expect(todosActions.createTodoAsync(__.todoMessage)).toEqual({
            type:    types.CREATE_TODO_ASYNC,
            payload: __.todoMessage,
        });
    });
    test('removeTodoAsync', () => {
        expect(todosActions.removeTodoAsync(__.todo.id)).toEqual({
            type:    types.REMOVE_TODO_ASYNC,
            payload: __.todo.id,
        });
    });
    test('updateTodoAsync', () => {
        expect(todosActions.updateTodoAsync(__.todo)).toEqual({
            type:    types.UPDATE_TODO_ASYNC,
            payload: __.todo,
        });
    });
    test('togglePriorityTodoAsync', () => {
        expect(todosActions.togglePriorityTodoAsync(__.todo)).toEqual({
            type:    types.TOGGLE_PRIORITY_TODO_ASYNC,
            payload: __.todo,
        });
    });
    test('toggleCompletedTodoAsync', () => {
        expect(todosActions.toggleCompletedTodoAsync(__.todo)).toEqual({
            type:    types.TOGGLE_COMPLETED_TODO_ASYNC,
            payload: __.todo,
        });
    });
    test('allCompletedTodosAsync', () => {
        expect(todosActions.allCompletedTodosAsync(__.todosList)).toEqual({
            type:    types.ALL_COMPLETED_TODOS_ASYNC,
            payload: __.todosList,
        });
    });
});
