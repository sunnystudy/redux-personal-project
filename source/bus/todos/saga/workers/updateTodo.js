//Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST";
import { todosActions } from "../../actions";
import { editActions } from "../../../edit/actions";
import { uiActions } from "../../../ui/actions";

export function* updateTodo ({ payload: newTodoData }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.todos.update, [newTodoData]);
        const { data: todo, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(todosActions.updateTodo(todo[0]));
        yield put(editActions.stopEditTodo());
    } catch (error) {
        yield put(uiActions.emitError(error, "updateTodo worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
