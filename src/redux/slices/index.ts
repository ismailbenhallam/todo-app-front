import { combineReducers } from "redux";
import {
  useCompleteTodo,
  useCreateTodo,
  useDeleteTodo,
  useFetchTodos,
} from "./hooks";
import { default as todosSlice } from "./todo-slice";

const rootReducer = combineReducers({
  todos: todosSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export const getTodos = (state: RootState) => state.todos.data;
export { useCreateTodo, useFetchTodos, useCompleteTodo, useDeleteTodo };
