import logo from "logo.webp";
import { FC } from "react";
import styled from "styled-components";

const LogoContainer = styled.img`
  height: 100%;
  max-height: 70px;
`;

const Logo: FC = () => {
  return <LogoContainer src={logo} alt="Todo App Logo" />;
};

export default Logo;
