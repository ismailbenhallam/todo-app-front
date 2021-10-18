import styled from "styled-components";
import NavigationLink from "./NavigationLink";

const Aside = styled.aside`
  position: absolute;
  height: 100%;
  width: 222px;
  left: 0px;
  top: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 69px;
`;

const links = [
  { name: "Accueil", path: "/", exact: true },
  { name: "Historique", path: "/history", exact: true },
];

export default function Sidebar() {
  return (
    <Aside>
      {/* <NavigationLink to="/" exact={true}>
        Accueil
      </NavigationLink>
      <NavigationLink to="/history" exact={true}>
        History
      </NavigationLink> */}
      {links.map((l) => (
        <NavigationLink key={l.name} to={l.path} exact={l.exact}>
          {l.name}
        </NavigationLink>
      ))}
    </Aside>
  );
}
