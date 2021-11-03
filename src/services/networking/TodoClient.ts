import Todo from "../../models/Todo";
import client from "./Client";

export const BASE_URL = "https://todoapp-ismailbenhallam.netlify.app";
class TodoClient {
  allTodos = async (): Promise<Todo[]> => {
    const response = await client.get(BASE_URL + "/todos");
    return this.correctDates(response.data);
  };

  saveTodo = async (todo: Todo): Promise<Todo> => {
    const response = await client.post(BASE_URL + "/todos", todo);
    return this.correctDate(response.data);
  };

  deleteTodo = async (id: number): Promise<Todo> => {
    const response = await client.delete(BASE_URL + "/todo/" + id);
    return this.correctDate(response.data);
  };

  completeTodo = async (id: number): Promise<Todo> => {
    const response = await client.patch(BASE_URL + "/todo/" + id);
    return this.correctDate(response.data);
  };

  private correctDate = (todo: Todo): Todo => {
    if (todo.completionDate)
      todo.completionDate = new Date(
        Date.parse(todo?.completionDate?.toString())
      );
    return todo;
  };

  private correctDates = (todos: Todo[]): Todo[] => {
    todos.forEach(this.correctDate);
    return todos;
  };
}

const todoClient = new TodoClient();
export default todoClient;
