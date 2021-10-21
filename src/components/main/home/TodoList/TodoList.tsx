import { FC } from "react";
import { useSelector } from "react-redux";
import Todo from "../../../../models/Todo";
import { RootState } from "../../../../redux/reducers";
import { TodoListContainer } from "./TodoList.style";

export type TodoListProps = {
  filterFunction: (todo: Todo) => boolean;
  todoComponent: FC<any>;
};

const TodoList: FC<TodoListProps> = (props) => {
  const todos = useSelector((state: RootState) => state.todos);
  const TodoComponent = props.todoComponent;
  const toDisplayTodos = todos.filter(props.filterFunction);

  return (
    <TodoListContainer>
      {toDisplayTodos.length ? (
        toDisplayTodos.map((todo) => <TodoComponent key={todo.id} {...todo} />)
      ) : (
        <div>No data</div>
      )}
    </TodoListContainer>
  );
};

export default TodoList;
