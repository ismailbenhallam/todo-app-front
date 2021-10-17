import styled from "styled-components";

const Button = styled.button`
  width: 140px;
  height: 36px;
  border-radius: 4px;
  border-color: #eb514e;
  font-family: "Lato";
  font-size: 14px;
  color: #eb514e;
  background-color: transparent;
  cursor: pointer;
`;

export default function LogoutButton() {
  return <Button>Déconnexion</Button>;
}
