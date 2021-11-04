import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../models/Todo";

export type TodoState = Readonly<{
  data: Todo[];
}>;

const initialState: TodoState = {
  data: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<Todo[]>) => {
      state.data = action.payload;
    },
    createTodo: (state, action: PayloadAction<Todo>) => {
      state.data.push(action.payload);
    },

    completeTodo: (state, action: PayloadAction<Todo>) => {
      const length = state.data.length;
      for (let i = 0; i < length; i++) {
        if (state.data[i].id === action.payload.id) {
          state.data[i] = action.payload;
          break;
        }
      }
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      const length = state.data.length;
      for (let i = 0; i < length; i++) {
        if (state.data[i].id === action.payload.id) {
          state.data[i] = action.payload;
          break;
        }
      }
    },
  },
});

export const { getTodos, createTodo, completeTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
