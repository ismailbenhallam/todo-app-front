import Todo, { TodoPriority, TodoState } from "../../../../../models/Todo";
import { cleanup, render } from "../../../../../utils/test-utils";
import TodoContent from "./TodoContent";

afterEach(cleanup);

test("TodoContent component", async () => {
  const todo = new Todo(
    1,
    "The best title ever",
    "a description full of mistakes",
    TodoPriority.NORMAL,
    TodoState.WAITING
  );

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
