//Reducer
import { todosReducer } from "../reducer";

//Actions
import { todosActions } from "../actions";

describe("todos reducer: ", () => {
    test("should return initial state by default", () => {
        expect(todosReducer(void 0, {})).toMatchInlineSnapshot(
            `Immutable.List []`
        );
    });
    test("should handle FILL_TODOS action", () => {
        expect(todosReducer(void 0, todosActions.fillTodos(__.todosList)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "data": Immutable.List [
    Immutable.Map {
      "id": "xjh",
      "message": "Успешно пройти React-интенсив компании Lectrum",
      "completed": false,
      "favorite": true,
    },
    Immutable.Map {
      "id": "xjr",
      "message": "Взять автограф у Джареда Лето",
      "completed": false,
      "favorite": false,
    },
    Immutable.Map {
      "id": "xrh",
      "message": "Зарегестрировать бабушку в Твиче",
      "completed": true,
      "favorite": true,
    },
    Immutable.Map {
      "id": "rjh",
      "message": "Записать собаку на груминг",
      "completed": true,
      "favorite": false,
    },
  ],
}
`);
    });
    test("should handle CREATE_TODO action", () => {
        expect(todosReducer(void 0, todosActions.createTodo(__.todo)))
            .toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "id": "TEST_ID",
    "message": "TEST_MESSAGE",
    "favorite": false,
    "completed": false,
  },
]
`);
    });
    test("should handle REMOVE_TODO action", () => {
        expect(
            todosReducer(void 0, todosActions.removeTodo(__.todo.id))
        ).toMatchInlineSnapshot(`Immutable.List []`);
    });
    test("should handle UPDATE_TODO action", () => {
        expect(
            todosReducer(void 0, todosActions.updateTodo(__.todo))
        ).toMatchInlineSnapshot(`Immutable.List []`);
    });
    test("should handle TOGGLE_PRIORITY_TODO action", () => {
        expect(
            todosReducer(void 0, todosActions.togglePriorityTodo(__.todo))
        ).toMatchInlineSnapshot(`Immutable.List []`);
    });
    test("should handle TOGGLE_COMPLETED_TODO action", () => {
        expect(
            todosReducer(void 0, todosActions.toggleCompletedTodo(__.todo))
        ).toMatchInlineSnapshot(`Immutable.List []`);
    });
    test("should handle ALL_COMPLETED_TODOS action", () => {
        expect(
            todosReducer(void 0, todosActions.allCompletedTodos(__.todosList))
        ).toMatchInlineSnapshot(`Immutable.List []`);
    });
});
