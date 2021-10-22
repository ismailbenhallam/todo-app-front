import { PayloadAction } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import Todo from "../../models/Todo";
import TodoService from "../../services/TodoService";
import { completeTodo, createTodo, deleteTodo } from "../slices";

const service = new TodoService();
const persisteWithTodoServiceMiddleware: Middleware =
  (storeAPI) => (next) => (action: PayloadAction<number | Todo>) => {
    console.log(`dispatching action caught by "persisteWithServiceMiddleware"`);
    switch (action.type) {
      case createTodo.type:
        action.payload = service.saveTodo(action.payload as Todo);
        break;
      case deleteTodo.type:
        service.deleteTodo(action.payload as number);
        break;
      case completeTodo.type:
        service.completeTodo(action.payload as number);
        break;
    }
    return next(action);
  };

export default persisteWithTodoServiceMiddleware;
