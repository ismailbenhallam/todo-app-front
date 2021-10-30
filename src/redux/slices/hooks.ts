import { useDispatch } from "react-redux";
import { useAsync } from "react-use";
import Todo from "../../models/Todo";
import todoClient from "../../services/networking/TodoClient";
import { useTypedAsyncFn } from "../useTypedAsyncFn";
import {
  completeTodo,
  completeTodoFailure,
  completeTodoSuccess,
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  getTodos,
  getTodosFailure,
  getTodosSuccess,
} from "./todo-slice";

export const useFetchTodos = () => {
  const dispatch = useDispatch();

  return useAsync(async () => {
    dispatch(getTodos());
    try {
      const todos = await todoClient.allTodos();
      return dispatch(getTodosSuccess(todos));
    } catch (error) {
      dispatch(getTodosFailure(error));
      throw error;
    }
  }, [dispatch]);
};

export const useCreateTodo = () => {
  const dispatch = useDispatch();

  return useTypedAsyncFn<Todo>(
    async (todo) => {
      dispatch(createTodo(todo));
      try {
        const savedTodo = await todoClient.saveTodo(todo);
        return dispatch(createTodoSuccess(savedTodo));
      } catch (error) {
        dispatch(createTodoFailure(error));
        throw error;
      }
    },
    [dispatch]
  );
};

export const useCompleteTodo = () => {
  const dispatch = useDispatch();

  return useTypedAsyncFn<number>(
    async (id) => {
      dispatch(completeTodo(id));
      try {
        const savedTodo = await todoClient.completeTodo(id);
        dispatch(completeTodoSuccess(savedTodo));
      } catch (error) {
        dispatch(completeTodoFailure(error));
        throw error;
      }
    },
    [dispatch]
  );
};

export const useDeleteTodo = () => {
  const dispatch = useDispatch();

  return useTypedAsyncFn<number>(
    async (id) => {
      dispatch(deleteTodo(id));
      try {
        const savedTodo = await todoClient.deleteTodo(id);
        dispatch(deleteTodoSuccess(savedTodo));
      } catch (error) {
        dispatch(completeTodoFailure(error));
        throw error;
      }
    },
    [dispatch]
  );
};
