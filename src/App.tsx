import React, { FC } from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar/Navbar";
import Root from "./components/Root";
import Sidebar from "./components/sidebar/SideBar/Sidebar";
import English from "./lang/en.json";
import French from "./lang/fr.json";
import store from "./redux/store";
import { Routes } from "./routes";

const locale = navigator.language;

let lang = French;
if (locale === "en-US") {
  lang = English;
}

const App: FC = () => (
  <Provider store={store}>
    <IntlProvider locale={locale} messages={English}>
      <Router>
        <Navbar />
        <Sidebar />
        <Root>
          <Routes />
        </Root>
      </Router>
    </IntlProvider>
  </Provider>
);
export default App;
