import { FC } from "react";
import Todo, { TodoPriorityNames } from "../../../../../models/Todo";
import {
  DescriptionDiv,
  PriorityAndTitleDiv,
  PrioritySpan,
  TitleSpan,
} from "./TodoContent.style";

const TodoContent: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <div>
      <PriorityAndTitleDiv>
        <PrioritySpan data-testid="priority-span" level={todo.priority}>
          {TodoPriorityNames.get(todo.priority)}
        </PrioritySpan>
        <TitleSpan data-testid="title-span">{todo.title}</TitleSpan>
      </PriorityAndTitleDiv>
      <DescriptionDiv data-testid="description-div">
        {todo.description}
      </DescriptionDiv>
    </div>
  );
};

export default TodoContent;
