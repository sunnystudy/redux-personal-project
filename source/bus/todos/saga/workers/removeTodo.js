//Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST";
import { todosActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* removeTodo ({ payload: todoId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.todos.remove, [todoId]);

        if (response.status !== 204) {
            const { data: message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(todosActions.removeTodo(todoId));
    } catch (error) {
        yield put(uiActions.emitError(error, "removeTodo worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
