import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar/Navbar";
import Root from "./components/Root";
import Sidebar from "./components/sidebar/SideBar/Sidebar";
import store from "./redux/store";
import { Routes } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Sidebar />
        <Root>
          <Routes />
        </Root>
      </Router>
    </Provider>
  );
}

export default App;
