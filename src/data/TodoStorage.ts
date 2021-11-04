import Todo from "models/Todo";

const TODOS_STORAGE_KEY = "todos__storage";
export default class TodoStorage {
  getTodos(): Array<Todo> {
    let todosString = localStorage.getItem(TODOS_STORAGE_KEY);
    if (!todosString) {
      todosString = "[]";
    }
    try {
      let array: any[] = JSON.parse(todosString);
      const todos: Todo[] = [];
      array.forEach((item) => {
        todos.push({
          id: item.id,
          title: item.title,
          description: item.description,
          priority: item.priority,
          state: item.state,
          completionDate: item.completionDate
            ? new Date(parseInt(item.completionDate))
            : undefined,
        });
      });
      return todos;
    } catch (e) {
      console.log("cannot parse the saved TODOs from localStorage : " + e);
      return [];
    }
  }

  saveTodos(array: Array<Todo>): void {
    let todos: any[] = [];
    array.forEach((t) => {
      todos.push({
        id: t.id,
        title: t.title,
        description: t.description,
        priority: t.priority,
        state: t.state,
        completionDate: t.completionDate,
      });
    });
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }
}
