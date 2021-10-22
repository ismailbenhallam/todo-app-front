import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo, { TodoState } from "../../models/Todo";

const createTodo: CaseReducer<Todo[], PayloadAction<Todo>> = (
  state,
  action
) => {
  const todo = action.payload;
  todo.id = state.length;
  state.push(todo);
};

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    createTodo,
    completeTodo: (state, action: PayloadAction<number>) => {
      let array = state.filter((todo) => todo.id === action.payload);
      array[0].state = TodoState.DONE;
      array[0].completionDate = new Date();
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      let array = state.filter((todo) => todo.id === action.payload);
      array[0].state = TodoState.DELETED;
      array[0].completionDate = new Date();
    },
  },
});

export default todosSlice;
