import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

const store = configureStore({
  preloadedState: {
    todos: [],
  },
  reducer: rootReducer,
});

export default store;
