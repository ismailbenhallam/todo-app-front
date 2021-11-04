import { PayloadAction } from "@reduxjs/toolkit";
import Todo from "models/Todo";
import { Middleware } from "redux";

const persisteWithTodoClientMiddleware: Middleware =
  (storeAPI) =>
  (next) =>
  async (action: PayloadAction<number | Todo | null>) => {
    console.log(`dispatching action caught by "persisteWithServiceMiddleware"`);
    return next(action);
  };

export default persisteWithTodoClientMiddleware;
