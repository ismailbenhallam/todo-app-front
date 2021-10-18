import { TodosData } from "../data/TodosData";
import Todo, { TodoState } from "../models/Todo";

export default class TodoService {
  allTodos(): Array<Todo> {
    let todosString = localStorage.getItem("todos");
    if (!todosString) {
      let todos = TodosData;
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    } else {
      return JSON.parse(todosString);
    }
  }

  saveTodo(todo: Todo): Todo {
    let todos = this.allTodos();
    todo.id = todos.length;
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
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
