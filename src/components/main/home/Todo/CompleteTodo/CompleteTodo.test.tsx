import CompleteTodo from ".";
import Todo, { TodoPriority, TodoState } from "../../../../../models/Todo";
import { cleanup, render } from "../../../../../utils/test-utils";

afterEach(cleanup);

test("CompleteTodo", async () => {
  const todo = new Todo(
    45,
    "a super fantastic title",
    "and a normal description",
    TodoPriority.LOW,
    TodoState.DELETED
  );

  let component = render(<CompleteTodo todo={todo} />);
  expect(component.queryByTestId("DateContainer")).not.toBeInTheDocument();

  const date = new Date();
  todo.completionDate = date;
  component = render(<CompleteTodo todo={todo} />);
  expect(component.queryByTestId("DateContainer")).toHaveTextContent(
    date.toLocaleDateString()
  );
});
