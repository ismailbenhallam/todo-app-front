import { BASE_URL } from "../../config/api_config";
import Todo from "../../models/Todo";
import Client from "./Client";

export class TodoClient {
  private client: Client;

  constructor() {
    this.client = new Client();
  }

  allTodos = async (): Promise<Todo[]> => {
    try {
      const response = await this.client.get(BASE_URL + "/todos", {
        // const response = await axios.get(
        //   "https://run.mocky.io/v3/7c5f09dc-9746-48dc-859b-44e76f960eef",
        // {
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  saveTodo = async (todo: Todo): Promise<Todo | null> => {
    try {
      const res = await this.client.post(BASE_URL + "/todo", {
        // const res = await axios.post(
        //   "https://run.mocky.io/v3/96098a7c-3106-4a03-8305-9141c2a14f5c",
        // {
        todo,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  deleteTodo = async (id: number): Promise<Todo | null> => {
    try {
      const response = await this.client.delete(BASE_URL + "/todo/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  completeTodo = async (id: number): Promise<Todo | null> => {
    try {
      const response = await this.client.patch(BASE_URL + "/todo/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
