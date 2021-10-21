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

export const DoneButton = styled.button`
  width: 85px;
  max-width: 100%;
  height: 30px;
  border-radius: 4px;
  font-family: "Lato";
  font-size: 14px;
  cursor: pointer;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: white;
  background: rgb(57, 154, 113);
  border-color: rgb(57, 154, 113);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const CancelButton = styled(DoneButton)`
  background: transparent;
  border-color: transparent;
  color: #acb7c1;
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 19px;
  border-color: none;
  box-shadow: unset;
`;
