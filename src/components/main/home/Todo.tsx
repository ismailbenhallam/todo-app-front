import { FC } from "react";
import styled from "styled-components";
// import { TodoPriority } from "./Todo";

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

const priorityColors = new Map();
priorityColors.set(TodoPriority.HIGH, "rgba(235, 81, 78, 0.83);");
priorityColors.set(TodoPriority.NORMAL, "rgba(57, 113, 154, 0.84)");
priorityColors.set(TodoPriority.LOW, "rgba(235, 188, 67, 0.83);");

const Div = styled.div`
  opacity: 0.6;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.18);
  display: grid;
  grid-template-columns: auto 15%;
  column-gap: 10px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 4px;
  &:last-child {
    margin-bottom: 0;
  }
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
  line-height: 17px;
  text-align: center;
  margin-right: 15px;
`;

const TitleSpan = styled.span`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #37424a;
`;

const DescriptionDiv = styled.div`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 19px;
  color: #707070;
`;

const Todo: FC<TodoProps> = (props) => {
  return (
    <Div data-id={props.id}>
      <div>
        <div>
          <PrioritySpan level={props.priority}>
            {TodoPriority[props.priority]}
          </PrioritySpan>
          <TitleSpan>{props.title}</TitleSpan>
        </div>
        <div>{props.description}</div>
      </div>
      <DescriptionDiv></DescriptionDiv>
    </Div>
  );
};

export default Todo;
