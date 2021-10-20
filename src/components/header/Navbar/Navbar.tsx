import LogoutButton from "../LogoutButton/LogoutButton";
import Logo from "../Logo";
import { Nav } from "./Navbar.style";

export default function Navbar() {
  return (
    <Nav>
      <Logo />
      <LogoutButton />
    </Nav>
  );
}
