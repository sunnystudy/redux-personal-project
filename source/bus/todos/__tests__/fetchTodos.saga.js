//Core
import { put, apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

// Instruments
import { api } from '../../../REST';
import { uiActions } from '../../ui/actions';
import { todosActions } from '../../todos/actions';
import { fetchTodos } from '../saga/workers';

describe("fetchTodos saga: ", () => {
    test("should complete a 200 status response scenario", async () => {
        await expectSaga(fetchTodos)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.fetch), __.fetchResponseSuccess]])
            .put(todosActions.fillTodos(__.responseDataSuccess.data))
            .put(uiActions.stopFetching())
            .run();
    });
    test("should complete a 400 status response scenario", async () => {
        await expectSaga(fetchTodos)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.todos.fetch), __.fetchResponseFail400]])
            .put(uiActions.emitError(__.error, 'fetchTodos worker'))
            .put(uiActions.stopFetching())
            .run();
    });
});
