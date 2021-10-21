import { FC } from "react";
import { TodoPriorityNames } from "../../../../../models/Todo";
import { TodoProps } from "../IncompleteTodo/IncompleteTodo";
import {
  DescriptionDiv,
  PriorityAndTitleDiv,
  PrioritySpan,
  TitleSpan,
} from "./TodoContent.style";

const TodoContent: FC<TodoProps> = (props) => {
  return (
    <div>
      <PriorityAndTitleDiv>
        <PrioritySpan level={props.priority}>
          {TodoPriorityNames.get(props.priority)}
        </PrioritySpan>
        <TitleSpan>{props.title}</TitleSpan>
      </PriorityAndTitleDiv>
      <DescriptionDiv>{props.description}</DescriptionDiv>
    </div>
  );
};

export default TodoContent;
