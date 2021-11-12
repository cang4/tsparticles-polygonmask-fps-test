import React from "react";
import ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import App from "./App";
import AppTwo from "./AppTwo";

import "./App.css";

var hist = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router history={hist}>
    <Route component={App} />
    <Route component={AppTwo} />
  </Router>,
  rootElement
);
