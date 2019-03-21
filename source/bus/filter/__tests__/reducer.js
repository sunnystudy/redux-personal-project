//Reducer
import { filterReducer } from "../reducer";

//Actions
import { filterActions } from "../actions";

describe("filter reducer: ", () => {
    test("should return initial state by default", () => {
        expect(filterReducer(void 0, {})).toMatchInlineSnapshot(`""`);
    });
    test("should handle SEARCH_TODO action", () => {
        expect(
            filterReducer(void 0, filterActions.searchTodo(__.query))
        ).toMatchInlineSnapshot(`"test"`);
    });
});
