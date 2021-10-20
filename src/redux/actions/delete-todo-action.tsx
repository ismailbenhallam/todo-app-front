import { createAction } from "@reduxjs/toolkit";

// const deleteTodo = (todoId: number) => {
//   return {
//     type: "DELETE_TODO",
//     payload: todoId,
//   };
// };

const deleteTodo = createAction<number>("DELETE_TODO");
export default deleteTodo;
