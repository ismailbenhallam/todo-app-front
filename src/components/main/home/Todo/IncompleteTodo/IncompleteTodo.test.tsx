import IncompleteTodo from ".";
import Todo, { TodoPriority, TodoState } from "../../../../../models/Todo";
import { cleanup, render } from "../../../../../utils/test-utils";

afterEach(cleanup);

test("Incomplete Todo", async () => {
  const todo: Todo = {
    id: 102,
    title: "a title",
    description: "desciiipchiouun",
    priority: TodoPriority.LOW,
    state: TodoState.WAITING,
  };
  const component = render(<IncompleteTodo todo={todo} />);

  expect(await component.findByTestId("DoneButton")).toHaveTextContent(
    "Terminer"
  );

  expect(await component.findByTestId("CancelButton")).toHaveTextContent(
    "Annuler"
  );
});
