import Todo, { TodoPriority, TodoState } from "models/Todo";
import { cleanup, render } from "utils/test-utils";
import TodoContent from "./TodoContent";

afterEach(cleanup);

test("TodoContent component", async () => {
  const todo: Todo = {
    id: 1,
    title: "The best title ever",
    description: "a description full of mistakes",
    priority: TodoPriority.NORMAL,
    state: TodoState.WAITING,
  };

  const component = render(<TodoContent todo={todo} />);

  expect(await component.findByTestId("priority-span")).toHaveTextContent(
    "Normale"
  );
  expect(await component.findByTestId("title-span")).toHaveTextContent(
    todo.title
  );
  expect(await component.findByTestId("description-div")).toHaveTextContent(
    todo.description
  );
});
