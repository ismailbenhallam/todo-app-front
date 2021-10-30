import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../models/Todo";

export type TodoState = Readonly<{
  data: Todo[];
  isLoading: boolean;
  error: any;
}>;

const initialState: TodoState = {
  data: [],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<void>) => {
      state.isLoading = true;
      state.error = null;
    },
    getTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getTodosFailure: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.isLoading = true;
    },

    createTodo: (state, action: PayloadAction<Todo>) => {
      state.isLoading = true;
      state.error = null;
    },
    createTodoSuccess: (state, action: PayloadAction<Todo>) => {
      state.data.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    createTodoFailure: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    completeTodo: (state, action: PayloadAction<number>) => {
      state.isLoading = true;
      state.error = null;
    },
    completeTodoSuccess: (state, action: PayloadAction<Todo>) => {
      state.isLoading = false;
      state.error = null;
      const length = state.data.length;
      for (let i = 0; i < length; i++) {
        if (state.data[i].id === action.payload.id) {
          state.data[i] = action.payload;
          break;
        }
      }
    },
    completeTodoFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteTodoSuccess: (state, action: PayloadAction<Todo>) => {
      state.isLoading = false;
      state.error = null;
      const length = state.data.length;
      for (let i = 0; i < length; i++) {
        if (state.data[i].id === action.payload.id) {
          state.data[i] = action.payload;
          break;
        }
      }
    },
    deleteTodoFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getTodos,
  getTodosSuccess,
  getTodosFailure,
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  completeTodo,
  completeTodoFailure,
  completeTodoSuccess,
  deleteTodo,
  deleteTodoFailure,
  deleteTodoSuccess,
} = todoSlice.actions;
export default todoSlice.reducer;

/* import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo, { TodoState } from "../../models/Todo";

interface TodoReduxState {
  data: Todo[];
  isLoading: boolean;
  error: any;
}

const initialState: TodoReduxState = {
  data: [],
  isLoading: false,
  error: null,
};

// Case Reducers
const createTodo: CaseReducer<TodoReduxState, PayloadAction<Todo>> = (
  state,
  action
) => {
  state.isLoading = true;
  state.error = null;
};

const createTodoSuccess: CaseReducer<TodoReduxState, PayloadAction<Todo>> = (
  state,
  action
) => {
  state.isLoading = false;
  state.error = null;
  state.data.push(action.payload);
};

const createTodoFailure: CaseReducer<TodoReduxState, PayloadAction<any>> = (
  state,
  action
) => {
  state.isLoading = false;
  state.error = action.payload;
};

const completeTodo: CaseReducer<TodoReduxState, PayloadAction<any>> = (
  state,
  action
) => {
  state.isLoading = true;
  state.error = null;
};

const completeTodoSuccess: CaseReducer<TodoReduxState, PayloadAction<any>> = (
  state,
  action
) => {
  state.isLoading = false;
  state.error = null;
  state.data=
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
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
 */
