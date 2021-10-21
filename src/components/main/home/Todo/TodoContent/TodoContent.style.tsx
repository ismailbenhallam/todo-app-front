import styled from "styled-components";
import { TodoPriority } from "../../../../../models/Todo";

const priorityColors = new Map<TodoPriority, string>();
priorityColors.set(TodoPriority.HIGH, "rgba(235, 81, 78)");
priorityColors.set(TodoPriority.NORMAL, "rgba(57, 113, 154)");
priorityColors.set(TodoPriority.LOW, "rgba(235, 188, 67);");

export const PrioritySelect = styled.button`
  width: 140px;
  height: 36px;
  border-radius: 4px;
  font-family: "Lato";
  font-size: 14px;
  cursor: pointer;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  background-color: white;
  color: grey;
  border-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const PriorityAndTitleDiv = styled.div`
  margin: 8px 0;
`;

export const PrioritySpan = styled.div.attrs(
  (props: { level: TodoPriority }) => ({
    level: props.level,
  })
)`
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

export const TitleSpan = styled.span`
  font-family: Segoe UI;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: black;
`;

export const DescriptionDiv = styled.div`
  font-family: Segoe UI;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #5a5353;
`;
