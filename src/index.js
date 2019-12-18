import React from "react";
import ReactDOM from "react-dom";

import Application from "./components/Application";

import "./index.css";
import { Provider } from "react-redux";
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
);
