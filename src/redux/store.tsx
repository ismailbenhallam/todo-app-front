import { configureStore } from "@reduxjs/toolkit";
import TodoService from "../services/TodoService";
// import { applyMiddleware } from "redux";
import persisteWithTodoServiceMiddleware from "./middlewares/persiste-with-service-middleware";
import rootReducer from "./slices";

// const middlewareEnhancer = applyMiddleware(persisteWithServiceMiddleware);

const service = new TodoService();

const store = configureStore({
  preloadedState: {
    todos: service.allTodos(),
  },

  reducer: rootReducer,

  // enhancers: [middlewareEnhancer],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persisteWithTodoServiceMiddleware),
});

export default store;
