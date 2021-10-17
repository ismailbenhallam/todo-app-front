import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import History from "./components/main/history/History";
import Home from "./components/main/home/Home";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Main>
        <Switch>
          <Route path="/history" component={History}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
