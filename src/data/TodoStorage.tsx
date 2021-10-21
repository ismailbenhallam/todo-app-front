import Todo from "../models/Todo";

const TODOS_STORAGE_KEY = "todos__storage";
export default class TodoStorage {
  getTodos(): Array<Todo> {
    let todosString = localStorage.getItem(TODOS_STORAGE_KEY);
    if (!todosString) {
      todosString = "[]";
    }
    try {
      return JSON.parse(todosString);
    } catch (e) {
      console.log("cannot parse the saved TODOs from localStorage : " + e);
      return [];
    }
  }

  saveTodos(array: Array<Todo>): void {
    localStorage.SetItem(TODOS_STORAGE_KEY, JSON.stringify(array));
  }
}
