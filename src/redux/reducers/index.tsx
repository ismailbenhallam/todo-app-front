import { combineReducers } from "redux";
import { default as todosReducer } from "./todo-reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
export { todosReducer as todoReducer };
