//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { todosActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* toggleCompletedTodo ({ payload: newTodoData }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.todos.update, [newTodoData]);
        const { data: todo, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(todosActions.toggleCompletedTodo(todo[0]));
    } catch (error) {
        yield put(uiActions.emitError(error, 'toggleCompletedTodo worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
