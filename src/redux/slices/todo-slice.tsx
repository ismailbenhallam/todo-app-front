import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosData } from "../../data/TodosData";
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
  //TODO: remove in prod
  initialState: TodosData,
  reducers: {
    createTodo,
    completeTodo: (state, action: PayloadAction<number>) => {
      state.filter((todo) => todo.id === action.payload)[0].state =
        TodoState.DONE;
      state.filter((todo) => todo.id === action.payload)[0].completionDate =
        new Date();
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.filter((todo) => todo.id === action.payload)[0].state =
        TodoState.DELETED;
      state.filter((todo) => todo.id === action.payload)[0].completionDate =
        new Date();
    },
  },
});

export default todosSlice;
