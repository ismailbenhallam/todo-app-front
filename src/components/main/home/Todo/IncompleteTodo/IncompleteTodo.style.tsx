import { Button } from "@mui/material";
import styled from "styled-components";

export const TodoContainer = styled.div`
  opacity: 0.6;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.18);
  display: grid;
  grid-template-columns: auto max-content;
  column-gap: 10px;
  padding: 10px;
  border-radius: 4px;
  @keyframes expand {
    from {
      transform: scale(0);
      opacity: 0;
    }
  }
  animation: expand 0.5s ease-in-out;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DoneButton = styled(Button)`
  &.MuiButton-root {
    font-family: Segoe UI;
  }
`;

export const CancelButton = styled(DoneButton)`
  &.MuiButton-root {
    color: #acb7c1;
    background: transparent;
    border-color: transparent;
    font-family: Segoe UI;
    box-shadow: unset;
  }
`;
