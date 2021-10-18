import Todo, { TodoPriority, TodoState } from "../models/Todo";
import TodoService from "./TodoService";

let service: TodoService;

beforeEach(() => {
  service = new TodoService();
});

test("TodoService#saveTodo", () => {
  let todos = service.allTodos();
  let length = todos.length;

  let todo = new Todo(-100, "jest-title", "jest-desc");
  let savedTodo = service.saveTodo(todo);
  let newTodos = service.allTodos();
  expect(newTodos).toHaveLength(length + 1);
  expect(savedTodo).toHaveProperty("id", length);
  expect(savedTodo).toEqual(
    new Todo(
      length,
      "jest-title",
      "jest-desc",
      TodoPriority.NORMAL,
      TodoState.WAITING
    )
  );
  expect(newTodos).toContainEqual(savedTodo);
});

test("deletedTodos", () => {
  const deleted = service.deletedTodos();
  deleted.forEach((todo) => {
    expect(todo.state).toBe(TodoState.DELETED);
  });
});

test("completedTodos", () => {
  const completed = service.completedTodos();
  completed.forEach((todo) => {
    expect(todo.state).toBe(TodoState.DONE);
  });
});

test("unfulfilledTodos", () => {
  const todos = service.unfulfilledTodos();
  todos.forEach((todo) => {
    expect(todo.state).toBe(TodoState.WAITING);
  });
});
