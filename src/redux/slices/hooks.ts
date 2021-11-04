import Todo from "models/Todo";
import { useDispatch } from "react-redux";
import { useAsync } from "react-use";
import todoClient from "services/networking/TodoClient";
import { useTypedAsyncFn } from "../useTypedAsyncFn";
import { completeTodo, createTodo, deleteTodo, getTodos } from "./todo-slice";

export const useFetchTodos = () => {
  const dispatch = useDispatch();

  return useAsync(async () => {
    const todos = await todoClient.allTodos();
    return dispatch(getTodos(todos));
  }, [dispatch]);
};

export const useCreateTodo = () => {
  const dispatch = useDispatch();

  return useTypedAsyncFn<Todo>(
    async (todo) => {
      const savedTodo = await todoClient.saveTodo(todo);
      return dispatch(createTodo(savedTodo));
    },
    [dispatch]
  );
};

export const useCompleteTodo = () => {
  const dispatch = useDispatch();

  return useTypedAsyncFn<number>(
    async (id) => {
      const savedTodo = await todoClient.completeTodo(id);
      dispatch(completeTodo(savedTodo));
    },
    [dispatch]
  );
};

export const useDeleteTodo = () => {
  const dispatch = useDispatch();

  return useTypedAsyncFn<number>(
    async (id) => {
      const savedTodo = await todoClient.deleteTodo(id);
      dispatch(deleteTodo(savedTodo));
    },
    [dispatch]
  );
};
