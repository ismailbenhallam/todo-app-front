import { createAction } from "@reduxjs/toolkit";
import Todo from "models/Todo";

// const createTodo = (todo: Todo) => {
//   return {
//     type: "CREATE_TODO",
//     payload: todo,
//   };
// };

const createTodo = createAction<Todo>("CREATE_TODO");
export default createTodo;
