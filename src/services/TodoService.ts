import { TodosData } from "../data/TodosData";
import Todo from "../models/Todo";

export default class TodoService {
  todos(): Array<Todo> {
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
    let todoString = localStorage.getItem("todos");
    if (!todoString) {
      todoString = "";
    }
    let todos: Array<Todo> = JSON.parse(todoString);
    todo.id = todos.length;
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    return todo;
  }
}
