import { combineReducers } from "redux";
import { default as todosSlice } from "../slices/todo-slice";

const rootReducer = combineReducers({
  todos: todosSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export const { completeTodo, deleteTodo, createTodo } = todosSlice.actions;
