import { FC } from "react";
import { NavLinkProps } from "react-router-dom";
import { NavigationLinkContainer } from "./NavigationLink.style";

const NavigationLink: FC<NavLinkProps> = (props) => {
  return <NavigationLinkContainer {...props} />;
};

export default NavigationLink;
