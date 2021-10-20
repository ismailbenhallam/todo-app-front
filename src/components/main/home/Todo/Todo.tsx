import { FC } from "react";
import {
  TodoPriority,
  TodoPriorityNames,
  TodoState,
} from "../../../../models/Todo";
import {
  CancelButton,
  ColumnDiv,
  DescriptionDiv,
  TodoContainer,
  DoneButton,
  PriorityAndTitleDiv,
  PrioritySpan,
  TitleSpan,
} from "./Todo.style";

export interface TodoProps {
  id: number;
  title: string;
  description: string;
  priority: TodoPriority;
  state: TodoState;
}

const Todo: FC<TodoProps> = (props) => {
  return (
    <TodoContainer data-id={props.id}>
      <div>
        <PriorityAndTitleDiv>
          <PrioritySpan level={props.priority}>
            {TodoPriorityNames.get(props.priority)}
          </PrioritySpan>
          <TitleSpan>{props.title}</TitleSpan>
        </PriorityAndTitleDiv>
        <DescriptionDiv>{props.description}</DescriptionDiv>
      </div>
      <ColumnDiv>
        <DoneButton data-target-id={props.id}>Terminer</DoneButton>
        <CancelButton>Annuler</CancelButton>
      </ColumnDiv>
    </TodoContainer>
  );
};

export default Todo;
