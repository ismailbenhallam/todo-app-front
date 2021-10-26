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
  const toDisplayTodos = todos.filter(props.filterFunction);
  const TodoComponent = props.todoComponent;

  return (
    <TodoListContainer data-testid="TodoListContainer">
      {toDisplayTodos.length
        ? toDisplayTodos.map((todo) => (
            <TodoComponent
              key={todo.id}
              todo={todo}
              data-testid="TodoComponent"
            />
          ))
        : "No data"}
    </TodoListContainer>
  );
};

export default TodoList;
