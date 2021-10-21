import styled from "styled-components";
import { TodoContainer as OriginalTodoContainer } from "../IncompleteTodo";

export const TodoContainer = styled(OriginalTodoContainer)`
  animation: none;
`;

export const DateContainer = styled.div`
  font-family: Segoe UI;
  font-size: 18px;
  line-height: 19px;
  /* text-align: right; */
  color: #4f575f;
  margin: auto;
  margin-right: 30px;
`;
