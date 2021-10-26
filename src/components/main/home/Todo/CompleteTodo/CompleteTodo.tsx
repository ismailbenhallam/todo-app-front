import { FC } from "react";
import Todo from "../../../../../models/Todo";
import TodoContent from "../TodoContent/TodoContent";
import { DateContainer, TodoContainer } from "./CompleteTodo.style";

const CompleteTodo: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <TodoContainer data-id={todo.id} data-testid="TodoContainer">
      <TodoContent todo={todo} />
      {todo.completionDate ? (
        <DateContainer data-testid="DateContainer">
          {todo.completionDate.toLocaleDateString()}
        </DateContainer>
      ) : (
        ""
      )}
    </TodoContainer>
  );
};

export default CompleteTodo;
