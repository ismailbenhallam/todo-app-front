import styled from "styled-components";
import { TodoListContainer as OriginalContainer } from "../home/TodoList/TodoList.style";

export const TodoListContainer = styled(OriginalContainer)`
  box-shadow: unset;
  border-radius: unset;
`;

export const Tabs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const Tab = styled.button`
  color: #37424a;
  background: transparent;
  border-color: transparent;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
  &.active {
    color: #eb514e;
  }
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  gap: 15px;

  /* TODO: look for a better way to acheive this (Container) */
  /* White */
  background: #ffffff;
  box-shadow: 0px 6px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  padding: 17px 25px 17px 25px;
  border-radius: 3px;
  margin-top: 25px;
  column-gap: 20px;
`;
