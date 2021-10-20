import { createAction } from "@reduxjs/toolkit";
// const completeTodo = (todoId: number) => {
//   return {
//     type: "COMPLETE_TODO",
//     payload: todoId,
//   };
// };

const completeTodo = createAction<number>("COMPLETE_TODO");
export default completeTodo;
