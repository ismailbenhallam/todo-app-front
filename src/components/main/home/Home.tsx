import { TodoState } from "models/Todo";
import { FC } from "react";
import NewTodo from "./NewTodo/NewTodo";
import IncompleteTodo from "./Todo/IncompleteTodo";
import TodoList from "./TodoList/TodoList";

const Home: FC = () => {
  return (
    <div>
      <NewTodo />
      <TodoList
        todoComponent={IncompleteTodo}
        filterFunction={(todo) => todo.state === TodoState.WAITING}
      />
    </div>
  );
};

export default Home;
