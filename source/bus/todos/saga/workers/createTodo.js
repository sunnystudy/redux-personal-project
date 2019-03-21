//Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST";
import { todosActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* createTodo ({ payload: todoMessage }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.todos.create, [todoMessage]);
        const { data: todo, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(todosActions.createTodo(todo));
    } catch (error) {
        yield put(uiActions.emitError(error, "createTodo worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
