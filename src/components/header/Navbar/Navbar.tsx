import LanguageChooser from "../LanguageChooser";
import Logo from "../Logo";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Nav, RightContainer } from "./Navbar.style";

export default function Navbar() {
  return (
    <Nav>
      <Logo />
      <RightContainer>
        <LanguageChooser />
        <LogoutButton />
      </RightContainer>
    </Nav>
  );
}
