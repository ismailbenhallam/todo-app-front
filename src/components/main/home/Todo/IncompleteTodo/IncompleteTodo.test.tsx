import IncompleteTodo from ".";
import Todo, { TodoPriority } from "../../../../../models/Todo";
import { cleanup, render } from "../../../../../utils/test-utils";

afterEach(cleanup);

test("Incomplete Todo", async () => {
  const todo = new Todo(102, "a title", "desciiipchiouun", TodoPriority.LOW);
  const component = render(<IncompleteTodo todo={todo} />);

  expect(await component.findByTestId("DoneButton")).toHaveTextContent(
    "Terminer"
  );

  expect(await component.findByTestId("CancelButton")).toHaveTextContent(
    "Annuler"
  );
});
