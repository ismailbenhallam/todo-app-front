import { Route, Switch } from "react-router";
import History from "./components/main/history/History";
import Home from "./components/main/home/Home";

export const PATHS: { [key: string]: { name: string; path: string } } = {
  home: { name: "Accueil", path: "/" },
  history: { name: "Historique", path: "/history" },
};

export const Routes = () => {
  return (
    <Switch>
      <Route path="/history" component={History} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  );
};
