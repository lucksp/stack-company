import React from "react";
import ReactDOM from "react-dom";
import App from "./features/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyle } from "./styles/GlobalStyles.css";
import store from "./redux/configureStore";

const render = App =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyle />
          <App />
        </React.Fragment>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );

render(App);
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
  const NextApp = require("./features/App").default;
  render(NextApp);
}
