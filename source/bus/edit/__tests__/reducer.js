//Reducer
import { editReducer } from "../reducer";

//Actions
import { editActions } from "../actions";

describe("edit reducer: ", () => {
    test("should return initial state by default", () => {
        expect(editReducer(void 0, {})).toMatchInlineSnapshot(
            `Immutable.Map {}`
        );
    });
    test("should handle START_EDIT_TODO action", () => {
        expect(editReducer(void 0, editActions.startEditTodo(__.todo)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "message": "TEST_MESSAGE",
  "favorite": false,
  "completed": false,
}
`);
    });
    test("should handle STOP_EDIT_TODO action", () => {
        expect(
            editReducer(void 0, editActions.stopEditTodo())
        ).toMatchInlineSnapshot(`Immutable.Map {}`);
    });
});
