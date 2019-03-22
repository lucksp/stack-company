import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles.css";

const render = App =>
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <GlobalStyle />
        <App />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
  );

render(App);
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
  const NextApp = require("./components/App").default;
  render(NextApp);
}
