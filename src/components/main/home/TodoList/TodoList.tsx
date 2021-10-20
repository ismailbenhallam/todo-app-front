import TodoService from "../../../../services/TodoService";
import Todo from "../Todo/Todo";
import { TodoListContainer } from "./TodoList.style";

const TodoList = () => {
  const todos = new TodoService().allTodos();
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
