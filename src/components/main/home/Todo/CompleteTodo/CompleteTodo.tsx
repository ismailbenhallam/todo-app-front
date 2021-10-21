import { FC } from "react";
import { TodoPriority, TodoState } from "../../../../../models/Todo";
import TodoContent from "../TodoContent/TodoContent";
import { DateContainer, TodoContainer } from "./CompleteTodo.style";

export interface TodoProps {
  id: number;
  title: string;
  description: string;
  priority: TodoPriority;
  state: TodoState;
  completionDate: Date;
}

const CompleteTodo: FC<TodoProps> = (props) => {
  return (
    <TodoContainer data-id={props.id}>
      <TodoContent {...props} />
      {props.completionDate ? (
        <DateContainer>
          {props.completionDate.toLocaleDateString()}
        </DateContainer>
      ) : (
        ""
      )}
    </TodoContainer>
  );
};

export default CompleteTodo;
