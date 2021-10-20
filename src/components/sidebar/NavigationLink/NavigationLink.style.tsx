import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLinkContainer = styled(NavLink)`
  height: 48px;
  width: 100%;
  text-decoration: none;

  color: #eb514e;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  &.active {
    background: linear-gradient(
      89.98deg,
      rgba(235, 81, 78, 0.41) 0.02%,
      rgba(255, 255, 255, 0.41) 99.98%
    );
    opacity: 0.83;
  }
`;
