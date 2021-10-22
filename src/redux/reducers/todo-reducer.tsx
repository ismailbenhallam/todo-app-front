import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import Todo, { TodoState } from "../../models/Todo";
import {
  completeTodoAction,
  createTodoAction,
  deleteTodoAction,
} from "../actions";

// const todosReducer: Reducer<Array<Todo>> = (state = TodosData, action) => {
//   switch (action.type) {
//     case "CREATE_TODO":
//       state.push(action.payload);
//       break;
//     case "COMPLETE_TODO":
//       state.filter((todo) => todo.id === action.payload)[0].state =
//         TodoState.DONE;
//       break;
//     case "DELETE_TODO":
//       state.filter((todo) => todo.id === action.payload)[0].state =
//         TodoState.DELETED;
//   }
//   return state;
// };

const todosReducer: Reducer<Array<Todo>> = createReducer<Todo[]>(
  // FIXME: remove TodosData...
  [],
  (builder) => {
    builder.addCase(createTodoAction, (state, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      todo.id = state.length;
      state.push(todo);
    });
    builder.addCase(
      completeTodoAction,
      (state, action: PayloadAction<number>) => {
        state.filter((todo) => todo.id === action.payload)[0].state =
          TodoState.DONE;
      }
    );
    builder.addCase(
      deleteTodoAction,
      (state, action: PayloadAction<number>) => {
        state.filter((todo) => todo.id === action.payload)[0].state =
          TodoState.DELETED;
      }
    );
  }
);

export default todosReducer;
