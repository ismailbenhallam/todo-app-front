import { FormattedMessage } from "react-intl";
import { PATHS } from "routes";
import NavigationLink from "../NavigationLink/NavigationLink";
import { SidebarContainer } from "./Sidebar.style";

export default function Sidebar() {
  return (
    <SidebarContainer>
      {Object.entries(PATHS).map((entry) => (
        <NavigationLink key={entry[1].path} to={entry[1].path} exact>
          <FormattedMessage id={"links." + entry[0]} />
        </NavigationLink>
      ))}
    </SidebarContainer>
  );
}
