import { PayloadAction } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import Todo from "../../models/Todo";
import { TodoClient } from "../../services/networking/TodoClient";
import { completeTodo, createTodo, deleteTodo } from "../slices";

const service = new TodoClient();
const persisteWithTodoClientMiddleware: Middleware =
  (storeAPI) =>
  (next) =>
  async (action: PayloadAction<number | Todo | null>) => {
    console.log(`dispatching action caught by "persisteWithServiceMiddleware"`);
    switch (action.type) {
      case createTodo.type:
        action.payload = await service.saveTodo(action.payload as Todo);
        break;
      case deleteTodo.type:
        await service.deleteTodo(action.payload as number);
        break;
      case completeTodo.type:
        await service.completeTodo(action.payload as number);
        break;
    }
    return next(action);
  };

export default persisteWithTodoClientMiddleware;
