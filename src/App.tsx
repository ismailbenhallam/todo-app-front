import { ThemeProvider } from "@mui/material";
import "App.css";
import Navbar from "components/header/Navbar/Navbar";
import Root from "components/Root";
import Sidebar from "components/sidebar/SideBar/Sidebar";
import { flattenMessages } from "lang/flattenMessages";
import MESSAGES from "lang/messages";
import React, { FC } from "react";
import { IntlProvider } from "react-intl";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { langSelector } from "redux/slices";
import store from "redux/store";
import { Routes } from "routes";
import theme from "theme";

const IntlProviderWrapper: FC<any> = ({ children }) => {
  const lang = useSelector(langSelector);
  return (
    <IntlProvider locale={lang} messages={flattenMessages(MESSAGES[lang])}>
      {children}
    </IntlProvider>
  );
};

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <IntlProviderWrapper>
          <Router>
            <Navbar />
            <Sidebar />
            <Root>
              <Routes />
            </Root>
          </Router>
        </IntlProviderWrapper>
      </ThemeProvider>
    </Provider>
  );
};
export default App;
