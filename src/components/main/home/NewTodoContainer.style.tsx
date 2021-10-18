import styled from "styled-components";

export const Container = styled.div`
  height: 220px;
  /* TODO: look for a better way to acheive this (This box-shadow config will be repeated in many components) */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 25px 17px 25px;
  border-radius: 3px;
  gap: 15px; ;
`;

export const InputText = styled.input`
  background-color: whitesmoke;
  border: none;
  height: 33px;
  padding-left: 11px;

  font-family: Avenir;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  /* margin-bottom: 10px; */

  border-radius: 4px;
`;

export const TextArea = styled(InputText)`
  height: 68px;
  padding-top: 10px;
`;

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
  /* line-height: 19px; */
  background-color: white;
  color: grey;
  border-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const AddButton = styled(PrioritySelect)`
  color: white;
  background: #eb514e;
  border-color: #eb514e;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center;
  align-content: center; */
  /* margin-top: auto;
  margin-bottom: auto; */
`;

export const ErrorDiv = styled.div.attrs((props: { visibility: boolean }) => ({
  visibility: props.visibility,
}))`
  color: #d63301;
  background-color: #ffccba;
  max-width: max-content;
  min-height: 25px;
  align-self: center;
  padding: 5px 20px;
  border-radius: 3px;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
`;
