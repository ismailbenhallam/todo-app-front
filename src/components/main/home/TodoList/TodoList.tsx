import { FC } from "react";
import Todo from "../../../../models/Todo";
import { useFetchTodos } from "../../../../redux/slices";
import { TodoListContainer } from "./TodoList.style";

export type TodoListProps = {
  filterFunction: (todo: Todo) => boolean;
  todoComponent: FC<any>;
};

const TodoList: FC<TodoListProps> = ({ todoComponent }) => {
  const TodoComponent = todoComponent;
  const state = useFetchTodos();

  // const toDisplayTodos = todos.filter(props.filterFunction);
  console.log("_____rhnjr_rk _", state);

  return (
    <div>
      <TodoListContainer data-testid="TodoListContainer">
        {state.loading && "Loading..."}
        {state.error && state.error?.message}
        {state.value &&
          state.value.payload &&
          (state.value.payload.length
            ? state.value.payload.map((t) => (
                <TodoComponent
                  key={t.id}
                  todo={t}
                  data-testid="TodoComponent"
                />
              ))
            : "No data")}
      </TodoListContainer>
    </div>
  );
};

export default TodoList;
