import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar/Navbar";
import Root from "./components/Root";
import Sidebar from "./components/sidebar/SideBar/Sidebar";
import { Routes } from "./routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Root>
        <Routes />
      </Root>
    </Router>
  );
}

export default App;
