import { FC } from "react";
import styled from "styled-components";
import { TodoPriorityNames } from "../../../models/Todo";
import { PrioritySelect } from "./NewTodoContainer.style";

export interface TodoProps {
  id: number;
  title: string;
  description: string;
  priority: TodoPriority;
  state: TodoState;
}

export enum TodoPriority {
  HIGH,
  NORMAL,
  LOW,
}

export enum TodoState {
  WAITING,
  DONE,
  DELETED,
}

const priorityColors = new Map<TodoPriority, string>();
priorityColors.set(TodoPriority.HIGH, "rgba(235, 81, 78)");
priorityColors.set(TodoPriority.NORMAL, "rgba(57, 113, 154)");
priorityColors.set(TodoPriority.LOW, "rgba(235, 188, 67);");

const Div = styled.div`
  opacity: 0.6;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.18);
  display: grid;
  grid-template-columns: auto max-content;
  column-gap: 10px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const PriorityAndTitleDiv = styled.div`
  margin: 8px 0;
`;

const PrioritySpan = styled.div.attrs((props: { level: TodoPriority }) => ({
  level: props.level,
}))`
  color: white;
  display: inline-block;
  text-align: center;
  width: 101.37px;
  height: 16px;
  background: ${(props) => priorityColors.get(props.level)};
  border-radius: 7px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  margin-right: 15px;
`;

const TitleSpan = styled.span`
  font-family: Segoe UI;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: black;
`;

const DescriptionDiv = styled.div`
  font-family: Segoe UI;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #5a5353;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const DoneButton = styled(PrioritySelect)`
  max-width: 100%;
  background: rgb(57, 154, 113);
  color: white;
  border-color: rgb(57, 154, 113);
  width: 85px;
  height: 30px;
`;

const CancelButton = styled(DoneButton)`
  background: transparent;
  border-color: transparent;
  color: #acb7c1;
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 19px;
  border-color: none;
  box-shadow: unset;
`;

const Todo: FC<TodoProps> = (props) => {
  return (
    <Div data-id={props.id}>
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
    </Div>
  );
};

export default Todo;
