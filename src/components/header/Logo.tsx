import styled from "styled-components";
import logo from "../../logo.webp";

const Img = styled.img`
  /* width: 40px; */
  height: 100%;
`;

export default function Logo() {
  return <Img src={logo} alt="Logo" />;
}
