import styled from "styled-components";

/* TODO: look for a better way to acheive this (Container) */
export const TodoListContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  padding: 17px 25px 17px 25px;
  border-radius: 3px;
  margin-top: 25px;
  column-gap: 20px;
  /* transition: transform 0.5s ease-in-out;
  transform: scaleY(1); */
`;

export const EmptyTodoListContainer = styled(TodoListContainer)`
  /* text-align: center; */
`;

export const ErrorDiv = styled(EmptyTodoListContainer)`
  color: red;
  background-color: pink;
`;

export const LoadingDiv = styled(ErrorDiv)`
  color: grey;
  background-color: white;
`;
