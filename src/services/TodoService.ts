import TodoStorage from "../data/TodoStorage";
import Todo, { TodoState } from "../models/Todo";

export default class TodoService {
  todoStorage: TodoStorage;

  constructor() {
    this.todoStorage = new TodoStorage();
  }

  allTodos(): Array<Todo> {
    return this.todoStorage.getTodos();
  }

  saveTodo(todo: Todo): Todo {
    let todos = this.allTodos();

    // Find the unique ID
    let id = todos.length;
    let length;
    do {
      length = todos.filter((t) => t.id === id).length;
    } while (length);
    todo.id = id;

    todos.push(todo);
    this.todoStorage.saveTodos(todos);
    return todo;
  }

  deletedTodos(): Array<Todo> {
    return this.allTodos().filter((todo) => todo.state === TodoState.DELETED);
  }

  completedTodos(): Array<Todo> {
    return this.allTodos().filter((todo) => todo.state === TodoState.DONE);
  }

  unfulfilledTodos(): Array<Todo> {
    return this.allTodos().filter((todo) => todo.state === TodoState.WAITING);
  }
}
