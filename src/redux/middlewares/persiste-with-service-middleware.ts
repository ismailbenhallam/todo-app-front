import { PayloadAction } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import Todo from "../../models/Todo";

const persisteWithTodoClientMiddleware: Middleware =
  (storeAPI) =>
  (next) =>
  async (action: PayloadAction<number | Todo | null>) => {
    console.log(`dispatching action caught by "persisteWithServiceMiddleware"`);
    return next(action);
  };

export default persisteWithTodoClientMiddleware;
