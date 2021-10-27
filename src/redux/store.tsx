import { configureStore } from "@reduxjs/toolkit";
import { TodoClient } from "../services/networking/TodoClient";
import persisteWithTodoClientMiddleware from "./middlewares/persiste-with-service-middleware";
import rootReducer, { createTodo } from "./slices";

// const middlewareEnhancer = applyMiddleware(persisteWithServiceMiddleware);

const client = new TodoClient();

const store = configureStore({
  preloadedState: {
    todos: [],
  },

  reducer: rootReducer,

  // enhancers: [middlewareEnhancer],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persisteWithTodoClientMiddleware),
});

const init = async () => {
  let todos = await client.allTodos();
  todos.forEach((t) => store.dispatch(createTodo(t)));
};
init();

export default store;
