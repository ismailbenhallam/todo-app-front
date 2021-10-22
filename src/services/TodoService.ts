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

  deleteTodo(id: number): Todo | null {
    const todos = this.allTodos();
    let toDelete = todos.filter((todo) => todo.id === id);
    if (!toDelete.length) {
      console.log("Empty array");
      return null;
    }
    toDelete[0].state = TodoState.DELETED;
    toDelete[0].completionDate = new Date();
    this.todoStorage.saveTodos(todos);
    return toDelete[0];
  }

  completeTodo(id: number): Todo | null {
    const todos = this.allTodos();
    let toComplete = todos.filter((todo) => todo.id === id);
    if (!toComplete.length) {
      console.log("Empty array");
      return null;
    }
    toComplete[0].state = TodoState.DONE;
    toComplete[0].completionDate = new Date();
    this.todoStorage.saveTodos(todos);
    return toComplete[0];
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
