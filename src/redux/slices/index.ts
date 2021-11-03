import { combineReducers } from "redux";
import {
  useCompleteTodo,
  useCreateTodo,
  useDeleteTodo,
  useFetchTodos,
} from "./hooks";
import { changeLang, default as langSlice } from "./language-slice";
import { default as todosSlice } from "./todo-slice";

const rootReducer = combineReducers({
  todos: todosSlice,
  lang: langSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export {
  useCreateTodo,
  useFetchTodos,
  useCompleteTodo,
  useDeleteTodo,
  changeLang,
};

export const getTodosSelector = (state: RootState) => state.todos.data;
export const langSelector = (state: RootState) => state.lang.value;
