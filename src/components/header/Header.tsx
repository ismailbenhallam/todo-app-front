import styled from "styled-components";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";

const Nav = styled.nav`
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 80px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
`;

export default function Header() {
  return (
    <Nav>
      <Logo />
      <LogoutButton />
    </Nav>
  );
}
