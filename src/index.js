import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./core/redux/store";
import { Provider } from "react-redux";
import { GlobalStyles } from "./global-style";

import "./assets/sass/light-bootstrap-dashboard-pro-react.scss";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
