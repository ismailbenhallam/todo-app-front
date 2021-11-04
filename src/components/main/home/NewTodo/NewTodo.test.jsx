import { cleanup, fireEvent, render, waitFor } from "utils/test-utils";
import NewTodo from ".";

let component, title, description, error, button;

beforeEach(() => {
  component = render(<NewTodo />);
  title = component.queryByTestId("title");
  description = component.queryByTestId("description");
  error = component.queryByTestId("error");
  button = component.queryByTestId("button");
});

afterEach(cleanup);

test("Init NewTodo", () => {
  expect(title).toHaveTextContent("");
  expect(description).toHaveTextContent("");
  expect(error).toHaveStyle({ visibility: "hidden" });
  expect(error).toHaveTextContent("Veuillez saisir un titre SVP");
});

test("Click button in NewTodo without providing a title", async () => {
  fireEvent.submit(button);
  await waitFor(() => {
    expect(title).toHaveTextContent("");
    expect(description).toHaveTextContent("");
    expect(error).toHaveStyle({ visibility: "visible" });
    expect(error).toHaveTextContent("Veuillez saisir un titre SVP");
  });
});

test("Click button in NewTodo", async () => {
  // FIXME:
  title.innerText = "DD";
  fireEvent.submit(button);
  // await waitFor(() => {
  //   expect(title).toHaveTextContent("DD");
  //   expect(description).toHaveTextContent("");
  //   expect(error).toHaveStyle({ visibility: "hidden" });
  //   expect(error).toHaveTextContent("Veuillez saisir un titre SVP");
  // });
});
