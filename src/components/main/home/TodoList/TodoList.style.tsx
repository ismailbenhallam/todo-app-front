import styled from "styled-components";

/* TODO: look for a better way to acheive this (Container) */
export const TodoListContainer = styled.div`
  /* height: 200px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 25px 17px 25px;
  border-radius: 3px;
  margin-top: 25px;
  column-gap: 20px;
`;
