import LoadingButton from "@mui/lab/LoadingButton";
import { Select, TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.form`
  /* TODO: look for a better way to acheive this (This box-shadow config will be repeated in many components) */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 25px 17px 25px;
  border-radius: 3px;
  gap: 30px;
`;

export const TitleTextField = styled(TextField)<{ loading: boolean }>`
  /* background-color: whitesmoke; */
  border: none;
  height: 25px;
  font-family: Avenir;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 30px !important;
`;

export const DescriptionTextArea = styled(TitleTextField)`
  height: 60px;
  padding-top: 10px;
`;

export const PrioritySelect = styled(Select)<{ loading: boolean }>`
  width: 140px;
  height: 40px;
  font-family: "Lato";
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 19px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const AddButton = styled(LoadingButton)``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
