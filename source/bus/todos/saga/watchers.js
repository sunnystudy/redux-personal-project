//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from "../types";

//Workers
import { fetchTodos, createTodo, removeTodo, updateTodo, togglePriorityTodo, toggleCompletedTodo, allCompletedTodos } from './workers';

function* watchFetchTodos () {
    yield takeEvery(types.FETCH_TODOS_ASYNC, fetchTodos);
}

function* watchCreateTodo () {
    yield takeEvery(types.CREATE_TODO_ASYNC, createTodo);
}

function* watchRemoveTodo () {
    yield takeEvery(types.REMOVE_TODO_ASYNC, removeTodo);
}

function* watchUpdateTodo () {
    yield takeEvery(types.UPDATE_TODO_ASYNC, updateTodo);
}

function* watchTogglePriorityTodo () {
    yield takeEvery(types.TOGGLE_PRIORITY_TODO_ASYNC, togglePriorityTodo);
}

function* watchToggleCompletedTodo () {
    yield takeEvery(types.TOGGLE_COMPLETED_TODO_ASYNC, toggleCompletedTodo);
}

function* watchAllCompletedTodos () {
    yield takeEvery(types.ALL_COMPLETED_TODOS_ASYNC, allCompletedTodos);
}

export function* watchTodos () {
    yield all([call(watchFetchTodos), call(watchCreateTodo), call(watchRemoveTodo), call(watchUpdateTodo), call(watchTogglePriorityTodo), call(watchToggleCompletedTodo), call(watchAllCompletedTodos)]);
}
