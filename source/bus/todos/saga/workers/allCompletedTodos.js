//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { todosActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* allCompletedTodos ({ payload: allTodos }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.todos.update, [allTodos]);
        const { data: todos, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(todosActions.allCompletedTodos(todos));
    } catch (error) {
        yield put(uiActions.emitError(error, 'allCompletedTodos worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
