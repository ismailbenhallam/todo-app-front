import Todo from "models/Todo";
import { FC } from "react";
import { FormattedDate } from "react-intl";
import TodoContent from "../TodoContent/TodoContent";
import { DateContainer, TodoContainer } from "./CompleteTodo.style";

const CompleteTodo: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <TodoContainer data-id={todo.id} data-testid="TodoContainer">
      <TodoContent todo={todo} />
      {todo.completionDate && (
        <DateContainer data-testid="DateContainer">
          <FormattedDate value={todo.completionDate} />
        </DateContainer>
      )}
    </TodoContainer>
  );
};

export default CompleteTodo;
