import Todo from "../../models/Todo";
import client from "./Client";

export const BASE_URL = "http://localhost:3000";
class TodoClient {
  allTodos = async (): Promise<Todo[]> => {
    const response = await client.get(BASE_URL + "/todos");
    return response.data;
  };

  saveTodo = async (todo: Todo): Promise<Todo> => {
    const response = await client.post(BASE_URL + "/todos", todo);
    return response.data;
  };

  deleteTodo = async (id: number): Promise<Todo> => {
    const response = await client.delete(BASE_URL + "/todo/" + id);
    return response.data;
  };

  completeTodo = async (id: number): Promise<Todo> => {
    const response = await client.patch(BASE_URL + "/todo/" + id);
    return response.data;
  };
}

const todoClient = new TodoClient();
export default todoClient;
