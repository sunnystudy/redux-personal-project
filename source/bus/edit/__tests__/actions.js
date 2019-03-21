//Actions
import { editActions } from "../actions";

describe('edit actions: ', () => {
    test('startEditTodo', () => {
        expect(editActions.startEditTodo(__.todo)).toMatchSnapshot();
    });
    test('stopEditTodo', () => {
        expect(editActions.stopEditTodo()).toMatchSnapshot();
    });
});
