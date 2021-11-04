import { default as todoClient } from "services/networking/TodoClient";
import { cleanup, render } from "utils/test-utils";
import TodoList from ".";
import CompleteTodo from "../Todo/CompleteTodo";

afterEach(cleanup);

test("TodoList renders No Data", () => {
  let component = render(
    <TodoList todoComponent={CompleteTodo} filterFunction={(todo) => false} />
  );

  expect(component.getByTestId("TodoListContainer")).toHaveTextContent(
    "No data"
  );
});

test("TodoList", async () => {
  const todos = await todoClient.allTodos();
  let component = render(
    <TodoList todoComponent={CompleteTodo} filterFunction={(todo) => true} />
  );

  const children = component.queryAllByTestId("TodoComponent");
  expect(children.map((child) => child.getAttribute("key"))).toEqual(
    todos.map((t) => t.id)
  );
});
