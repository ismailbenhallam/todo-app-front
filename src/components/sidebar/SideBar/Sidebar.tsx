import { PATHS } from "../../../routes";
import NavigationLink from "../NavigationLink/NavigationLink";
import { SidebarContainer } from "./Sidebar.style";

export default function Sidebar() {
  return (
    <SidebarContainer>
      {Object.entries(PATHS).map((entry) => (
        <NavigationLink key={entry[1].path} to={entry[1].path} exact>
          {entry[1].name}
        </NavigationLink>
      ))}
    </SidebarContainer>
  );
}
