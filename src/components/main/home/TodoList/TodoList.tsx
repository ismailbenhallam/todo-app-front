import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import Todo from "../../../../models/Todo";
import { getTodosSelector, useFetchTodos } from "../../../../redux/slices";
import {
  EmptyTodoListContainer,
  ErrorDiv,
  LoadingDiv,
  TodoListContainer,
} from "./TodoList.style";

export type TodoListProps = {
  filterFunction: (todo: Todo) => boolean;
  todoComponent: FC<any>;
};

const TodoList: FC<TodoListProps> = ({ todoComponent, filterFunction }) => {
  const TodoComponent = todoComponent;
  const state = useFetchTodos();
  const list = useSelector(getTodosSelector);

  if (state.loading) return <LoadingDiv>Loading...</LoadingDiv>;
  if (state.error) return <ErrorDiv>{state.error.message}</ErrorDiv>;

  const filteredList = list.filter(filterFunction);
  if (filteredList.length)
    return (
      <TodoListContainer data-testid="TodoListContainer">
        {filteredList.filter(filterFunction).map((t) => (
          <TodoComponent key={t.id} todo={t} data-testid="TodoComponent" />
        ))}
      </TodoListContainer>
    );
  return (
    <EmptyTodoListContainer>
      <FormattedMessage id="todoList.nodata" />
    </EmptyTodoListContainer>
  );
};

export default TodoList;
