//Actions
import { filterActions } from "../actions";

describe("filter actions: ", () => {
    test("searchTodo", () => {
        expect(filterActions.searchTodo(__.query)).toMatchSnapshot();
    });
});
